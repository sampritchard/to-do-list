(function(exports) {
  function NoteList() {
    this.list = [];
  };

NoteList.prototype.returnNotes = function () {
  return this.list
};
  exports.NoteList = NoteList;

})(this)
