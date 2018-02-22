$(document).ready(function() {
    var canvas = document.getElementById("canvas");
    var ctx = canvas.getContext('2d');
    ctx.translate(0, canvas.height);
    ctx.scale(1, -1);

    $("#clearCanvas").on('click', function(){
        ctx.clearRect(0, 0, canvas.width, canvas.height);
    });

    $("#generateRect").on('click', function(){
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.beginPath();
        ctx.moveTo(50, 50);
        ctx.lineTo(100, 50);
        ctx.lineTo(100, 25);
        ctx.lineTo(25, 25);
        ctx.lineTo(25, 50);
        ctx.closePath();
        ctx.fill();
    });

    $("#generateClosedPolygon").on('click', function(){
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.beginPath();
        ctx.moveTo(50, 50);
        ctx.lineTo(100,50);
        ctx.lineTo(50, 100);
        ctx.lineTo(0, 90);
        ctx.closePath();
        ctx.fill();
    })

    $("#generateOpenPolylines").on('click', function(){
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        ctx.beginPath();
        
        for(let i = 0; i < 25; i++){
            ctx.lineTo( Math.random()* 100,  Math.random()* 100);
        }
        ctx.stroke();
        
    });

    $("#generateEllipse").on('click', function(){
        let yCoord = 50, xCoord = 50, height = 100, width = 50;
        ctx.clearRect(0, 0, canvas.width, canvas.height);
    
        ctx.moveTo(xCoord, yCoord - height/2); // A1
        
        ctx.bezierCurveTo(xCoord + width/2, yCoord - height/2, 
          xCoord + width/2, yCoord + height/2,
          xCoord, yCoord + height/2); 
      
        ctx.bezierCurveTo(
          xCoord - width/2, yCoord + height/2, 
          xCoord - width/2, yCoord - height/2, 
          xCoord, yCoord - height/2); 
       
        ctx.fillStyle = "black";
        ctx.fill();
        ctx.closePath();	
    
    });


    $("#generateCircle").on('click', function(){
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        var x_origin = 50
        var y_origin = 20

        var r_val = 20

        var x = r_val;
        var y = 0;
        var e = 0;

        while(x >= y){

            ctx.fillRect(x_origin + x,y_origin + y,1,1);
            ctx.fillRect(x_origin + y,y_origin + x,1,1);

            ctx.fillRect(x_origin - y,y_origin + x,1,1);
            ctx.fillRect(x_origin - x,y_origin + y,1,1);

            ctx.fillRect(x_origin - x,y_origin - y,1,1);
            ctx.fillRect(x_origin - y,y_origin - x,1,1);

            ctx.fillRect(x_origin + y,y_origin - x,1,1);
            ctx.fillRect(x_origin + x,y_origin - y,1,1);

            if (e <= 0){
                y += 1;
                e += 2*y + 1;
            }

            if (e > 0){
                x -= 1;
                e -= 2*x + 1;
            }
        }
    });


    $("#generateLine").on('click', function(){
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        var x1 = 5;
        var y1 = 10;
    
        var x2 = 150;
        var y2 = 200;
    
        var dx = Math.abs(x2 - x1);
        var dy = Math.abs(y2 - y1);
       
        var x,y,sx,sy = 0;
    
        sx = (x1 < x2) ? 1 : -1;
        sy = (y1 < y2) ? 1 : -1;
        y = y1;
        x = x1;
        var d = dx - dy;
        var d_err;
                
        var notComplete = true;

        //return;
    
        while(notComplete) {

               ctx.fillRect(x,y,1,1);
    
            if (x === x2 && y === y2){
                notComplete= false;
            }
            
            dd = 2 * d;
    
            if (dd > -1 * dy)
            {
                d = d - dy;
                x = x + sx;
            }
            if (dd < dx)
            {
                d = d + dx;
                y = y + sy;
            }
        }
    });
    


});