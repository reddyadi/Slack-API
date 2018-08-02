console.log("working");

var key;
$.ajax({
  url: "config.json",
  dataType: "json",
  type: "GET",
  success: function(data) {
    key = data[0].API_KEY;

    getData();
  },
  error: function(error) {
    console.log("ERROR");
    console.log(error);
  }
});
function getData() {
  $.ajax({
    url: "https://slack.com/api/users.list?token="+key,
    dataType: "json",
    type: "GET",
    success: function(result) {
      console.log(result);
      // console.log(result.members[0].name);
      var ls = document.getElementById('list');
      for (var i = 0; i < result.members.length; i++) {
        console.log(result.members[i].name);
        var li = document.createElement('li');
        var text = document.createTextNode(result.members[i].name);
        var text2 = document.createTextNode(result.members[i].id);
        var dash =document.createTextNode("------");
        li.appendChild(text);
        li.appendChild(dash);
        li.appendChild(text2);
        ls.appendChild(li);
      }
    },
    error: function(error) {
      console.log(error);
      console.log("ERROR");
    }
  })
}
