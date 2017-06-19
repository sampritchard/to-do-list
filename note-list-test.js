function testNoteListContainsArray() {
  var noteList = new NoteList();
  // assert.isEqual(noteList.list,[]);
  Array.isArray(noteList.list);
};
testNoteListContainsArray()

function testReturnNoteModels() {
  var noteList = new NoteList();
  var note = "note double"
  var note2 = "note double 2"
  noteList.list.push(note, note2)

  assert.isEqual(noteList.returnNotes(), noteList.list)
}

testReturnNoteModels()
