(function($) {
  $(function() {
    $('textarea.bookmarklet')
      .each(function() {
        var associatedBookmarklet;

        var encodeBookmarklet(code) {
          code = code.trim();
          if (code.slice(0,11) !== "javascript:") { 
            code = "javascript:" + code;
          }
          code = encodeURI(code);
          return code;
        }

        var createButton = function(code, title) {
          return $('<a/>')
            .addClass("bookmarkletLink")
            .text(title || 'Bookmarklet')
            .attr('href', encodeBookmarklet(code))
            .css( {
              'font-family': 'Roboto Slab',
              'font-size': '22px',
              'line-height': 1.5,
              'color': '#1b2d37',
              'width': '40%',
              'background-color': '#cddde6',
              'padding': '5px',
              'border-radius': '5px',
              'text-decoration': 'none'
            })
            .on('click', function() { 
              // TODO: slicker help message; or show preview of effects of bookmarklets
              //console.log("Clicked me", $(this).attr('href')); 
              alert("To install the bookmarklet, drag this link to your bookmarks toolbar.");
              return false;
            });
        }

        var appendBookmarklet = function(el) {
          if (typeof(associatedBookmarklet) !== "undefined") {
            associatedBookmarklet.remove();
            associatedBookmarklet = null;
          }
          // use .val() since .text() doesn't seem to be "up-to-date"
          associatedBookmarklet = createButton($(el).val(), $(el).attr('title'));
          $(el).after(associatedBookmarklet);
        }

        appendBookmarklet(this);
        $(this).change(function(e) {
          appendBookmarklet(this);
        });
      });
  });
})(jQuery)
