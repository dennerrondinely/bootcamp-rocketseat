const express = require('express');

const server = express();

server.use(express.json());

const projects = [];

server.post('/projects', (req, res) => {
  projects.push(req.body)
  return res.json(projects)
});

server.get('/projects', (req, res) => res.json(projects));

server.put('/projects/:id', (req, res) => {
  const { id } = req.params;
  const  { title } = req.body;

  projects[id].title = title;

  res.json(projects)
});

server.delete('/projects/:id', (req, res) => {
  const { id } = req.params;

  projects.splice(id, 1);

  return res.send('Deleted!');
})

server.post('/projects/:id/tasks', (req, res) => {
  const { id } = req.params;
  const { title } = req.body;

  projects[id].tasks.push(title);

  return res.json(projects);
})

server.listen(3000);