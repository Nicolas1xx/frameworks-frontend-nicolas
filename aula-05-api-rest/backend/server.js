const express=require('express');const cors=require('cors');const fs=require('fs');const path=require('path');const app=express();const FILE=path.join(__dirname,'data.json');app.use(cors());app.use(express.json());
const read=()=>{try{return JSON.parse(fs.readFileSync(FILE,'utf8'))}catch{return[]}};const write=data=>fs.writeFileSync(FILE,JSON.stringify(data,null,2));
app.get('/',(_,res)=>res.json({api:'Notas',status:'online'}));
app.get('/api/notes',(_,res)=>res.json(read()));
app.get('/api/notes/:id',(req,res)=>{const note=read().find(n=>n.id===req.params.id);if(!note)return res.status(404).json({erro:'Nota não encontrada'});res.json(note)});
app.post('/api/notes',(req,res)=>{const{titulo,conteudo}=req.body;if(!titulo||!conteudo)return res.status(400).json({erro:'Título e conteúdo são obrigatórios'});const notes=read();const note={id:Date.now().toString(),titulo,conteudo,criadaEm:new Date().toISOString()};notes.push(note);write(notes);res.status(201).json(note)});
app.put('/api/notes/:id',(req,res)=>{const notes=read();const i=notes.findIndex(n=>n.id===req.params.id);if(i<0)return res.status(404).json({erro:'Nota não encontrada'});const{titulo,conteudo}=req.body;if(!titulo||!conteudo)return res.status(400).json({erro:'Título e conteúdo são obrigatórios'});notes[i]={...notes[i],titulo,conteudo,atualizadaEm:new Date().toISOString()};write(notes);res.json(notes[i])});
app.delete('/api/notes/:id',(req,res)=>{const notes=read();const filtered=notes.filter(n=>n.id!==req.params.id);if(filtered.length===notes.length)return res.status(404).json({erro:'Nota não encontrada'});write(filtered);res.status(204).end()});
const PORT=process.env.PORT||3000;app.listen(PORT,()=>console.log(`API em http://localhost:${PORT}`));
