alert(getTitle+"sapat");
		var $ = jQuery;
		



  function QueryKeyword(keyword)
  {
      var querykeyword = keyword;
      //var querykeyword = encodeURIComponent(keyword);
      var queryresult = '';


      $.ajax({
          url: "https://suggestqueries.google.com/complete/search",
          jsonp: "jsonp",
          dataType: "jsonp",
          data: {
          q: querykeyword,
          client: "chrome"
          },
          success: function(res) {
              var retList = res[1];
    var KeywordList = new Array();

    for(i = 0; i < retList.length; i++)
              {
                  var currents = CleanVal(retList[i]);
      if(currents != "")
        KeywordList.push(currents);
              }
    console.log(KeywordList);




          }
      });
  }

  function CleanVal(input)
  {
      var val = input;
      val = val.replace("\\u003cb\\u003e", "");
      val = val.replace("\\u003c\\/b\\u003e", "");
      val = val.replace("\\u003c\\/b\\u003e", "");
      val = val.replace("\\u003cb\\u003e", "");
      val = val.replace("\\u003c\\/b\\u003e", "");
      val = val.replace("\\u003cb\\u003e", "");
      val = val.replace("\\u003cb\\u003e", "");
      val = val.replace("\\u003c\\/b\\u003e", "");
      val = val.replace("\\u0026amp;", "&");
      val = val.replace("\\u003cb\\u003e", "");
      val = val.replace("\\u0026", "");
      val = val.replace("\\u0026#39;", "'");
      val = val.replace("#39;", "'");
      val = val.replace("\\u003c\\/b\\u003e", "");
      val = val.replace("\\u2013", "2013");
      if (val.length > 4 && val.substring(0, 4) == "http") val = "";
      return val;
  }
