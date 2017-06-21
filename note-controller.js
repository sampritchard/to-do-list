(function(exports) {

  var NoteController = function (notelist) {
  this.noteList = notelist;
  this.noteListView = new NoteListView(notelist);
  console.log(this.noteListView)
  }

  NoteController.prototype.createView = function(element) {
    element.innerHTML = this.noteListview.HTMLView();
    // document.getElementById('app').innerHTML = this.noteList.HTMLView();
  };

exports.NoteController = NoteController;

})(this)
