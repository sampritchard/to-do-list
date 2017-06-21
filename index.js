list = new NoteList;
controller = new NoteController(list);
list.addNote("note 1");
list.addNote("note 2");
controller.createView(app);
