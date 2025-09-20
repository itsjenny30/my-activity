 class tentacle { 
     constructor(x, y, n, a) {
        this.x = x;
        this.y = y;
        this.l = l;
        this.n = n;
        this.t = {};
        this.rand = Math. random();
        this.segments =  [new segment(this, this.1 / this.n, 0, true)];
        for (let i = 1; < globalThis.n; i++) {
            this.segments.push(
                new segment(this.segments[i - 1], this.1 / history.n, 0, false)
            );
        }
    }

            