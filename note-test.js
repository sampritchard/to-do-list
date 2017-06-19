function testNoteHasText() {
  var note = new Note("Hello World!");
  assert.isTrue(note.text === "Hello World!!");
};

testNoteHasText()
