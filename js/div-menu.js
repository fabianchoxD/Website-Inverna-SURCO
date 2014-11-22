$(document).ready(function() {
    $(".fancybox-thumb").fancybox({
        helpers : {
            title : {
                type: 'inside'
                    },
            overlay : {
                 css : {
                    'background' : 'rgba(1,1,1,0.65)'
                }
            }
        }
    });
});

function mostrar() {
          div = document.getElementById('flotante');
          if ( div.style.display == 'none')          {
            div.style.display = 'block'          }
          else{             
            div.style.display = 'none';
          }
        }