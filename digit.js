digit =
    [
        [
            [0,0,1,1,1,0,0],
            [0,1,1,0,1,1,0],
            [1,1,0,0,0,1,1],
            [1,1,0,0,0,1,1],
            [1,1,0,0,0,1,1],
            [1,1,0,0,0,1,1],
            [1,1,0,0,0,1,1],
            [1,1,0,0,0,1,1],
            [0,1,1,0,1,1,0],
            [0,0,1,1,1,0,0]
        ],//0
        [
            [0,0,0,1,1,0,0],
            [0,1,1,1,1,0,0],
            [0,0,0,1,1,0,0],
            [0,0,0,1,1,0,0],
            [0,0,0,1,1,0,0],
            [0,0,0,1,1,0,0],
            [0,0,0,1,1,0,0],
            [0,0,0,1,1,0,0],
            [0,0,0,1,1,0,0],
            [1,1,1,1,1,1,1]
        ],//1
        [
            [0,1,1,1,1,1,0],
            [1,1,0,0,0,1,1],
            [0,0,0,0,0,1,1],
            [0,0,0,0,1,1,0],
            [0,0,0,1,1,0,0],
            [0,0,1,1,0,0,0],
            [0,1,1,0,0,0,0],
            [1,1,0,0,0,0,0],
            [1,1,0,0,0,1,1],
            [1,1,1,1,1,1,1]
        ],//2
        [
            [1,1,1,1,1,1,1],
            [0,0,0,0,0,1,1],
            [0,0,0,0,1,1,0],
            [0,0,0,1,1,0,0],
            [0,0,1,1,1,0,0],
            [0,0,0,0,1,1,0],
            [0,0,0,0,0,1,1],
            [0,0,0,0,0,1,1],
            [1,1,0,0,0,1,1],
            [0,1,1,1,1,1,0]
        ],//3
        [
            [0,0,0,0,1,1,0],
            [0,0,0,1,1,1,0],
            [0,0,1,1,1,1,0],
            [0,1,1,0,1,1,0],
            [1,1,0,0,1,1,0],
            [1,1,1,1,1,1,1],
            [0,0,0,0,1,1,0],
            [0,0,0,0,1,1,0],
            [0,0,0,0,1,1,0],
            [0,0,0,1,1,1,1]
        ],//4
        [
            [1,1,1,1,1,1,1],
            [1,1,0,0,0,0,0],
            [1,1,0,0,0,0,0],
            [1,1,1,1,1,1,0],
            [0,0,0,0,0,1,1],
            [0,0,0,0,0,1,1],
            [0,0,0,0,0,1,1],
            [0,0,0,0,0,1,1],
            [1,1,0,0,0,1,1],
            [0,1,1,1,1,1,0]
        ],//5
        [
            [0,0,0,0,1,1,0],
            [0,0,1,1,0,0,0],
            [0,1,1,0,0,0,0],
            [1,1,0,0,0,0,0],
            [1,1,0,1,1,1,0],
            [1,1,0,0,0,1,1],
            [1,1,0,0,0,1,1],
            [1,1,0,0,0,1,1],
            [1,1,0,0,0,1,1],
            [0,1,1,1,1,1,0]
        ],//6
        [
            [1,1,1,1,1,1,1],
            [1,1,0,0,0,1,1],
            [0,0,0,0,1,1,0],
            [0,0,0,0,1,1,0],
            [0,0,0,1,1,0,0],
            [0,0,0,1,1,0,0],
            [0,0,1,1,0,0,0],
            [0,0,1,1,0,0,0],
            [0,0,1,1,0,0,0],
            [0,0,1,1,0,0,0]
        ],//7
        [
            [0,1,1,1,1,1,0],
            [1,1,0,0,0,1,1],
            [1,1,0,0,0,1,1],
            [1,1,0,0,0,1,1],
            [0,1,1,1,1,1,0],
            [1,1,0,0,0,1,1],
            [1,1,0,0,0,1,1],
            [1,1,0,0,0,1,1],
            [1,1,0,0,0,1,1],
            [0,1,1,1,1,1,0]
        ],//8
        [
            [0,1,1,1,1,1,0],
            [1,1,0,0,0,1,1],
            [1,1,0,0,0,1,1],
            [1,1,0,0,0,1,1],
            [0,1,1,1,0,1,1],
            [0,0,0,0,0,1,1],
            [0,0,0,0,0,1,1],
            [0,0,0,0,1,1,0],
            [0,0,0,1,1,0,0],
            [0,1,1,0,0,0,0]
        ],//9
        [
            [0,0,0,0],
            [0,0,0,0],
            [0,1,1,0],
            [0,1,1,0],
            [0,0,0,0],
            [0,0,0,0],
            [0,1,1,0],
            [0,1,1,0],
            [0,0,0,0],
            [0,0,0,0]
        ]//:
    ];



/* /!*对balls数组内存进行优化*!/
   var cnt = 0;
   for (var i = 0; i < balls.length; i++) {
       if (balls[i].x + RADIUS > 0 && balls[i].x - RADIUS < WINDOW_WIDTH) {
           balls[cnt++] = balls[i];
       }
   }

   /!*为了动画性能，最多保留300个小球*!/
   while (balls.length > cnt) {
       balls.pop();
   }*/


/*需要html中style="height: 100%"*/
/*WINDOW_WIDTH=document.body.clientWidth;
WINDOW_HEIGHT=document.body.clientHeight;
console.log(WINDOW_WIDTH)

MARGIN_TOP=Math.round(WINDOW_HEIGHT/5);
MARGIN_LEFT=Math.round(WINDOW_WIDTH/10);
RADIUS=Math.round(WINDOW_WIDTH*4/5/108)-1;/!*108是下面15个间距小球93+15=108计算得来的*!/
console.log( MARGIN_LEFT)*/















