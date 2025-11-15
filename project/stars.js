let flock;

function setup() {
    let canvas = createCanvas(windowWidth, windowHeight);
    colorMode(HSB);

    flock = new Flock();
    let boidAmount = windowWidth / 8;

    if (boidAmount > 60) {
        boidAmout = 60;
    } else {
        boidAmount = boidAmount;
    }

    
    for (let i = 0; i < boidAmount; i++) {
        let b = new Boid(width / 2, height / 2);
        flock.addBoid(b);

    }

}

function draw() {
    background(100);
    flock.run();
}

function mouseDragged() {
    if (windowWidth > 768) {
    flock.addBoid(new Boid(mouseX, mouseY));
    }
}

class Flock {
    constructor() {
        this.boids = [];
    }

    run() {
        for (let boid of this.boids) {
            boid.run(this.boids);
        }
    }

    addBoid(b) {
        this.boids.push(b);
    }
}

class Boid {
    constructor(x, y) {
        this.acceleration = createVector(0, 0);
        this.velocity = createVector(random(-1, 1), random(-1, 1));
        this.position = createVector(x, y);
        this.size = 3.5;
        this.maxSpeed = 2.5;
        this.maxForce = 0.05;
    }

    run(boids) {
        this.flock(boids);
        this.update();
        this.borders();
        this.render();
    }

    applyForce(force) {
        this.acceleration.add(force);
    }

    flock(boids) {
        let separation = this.separate(boids);
        let alignment = this.align(boids);
        let cohesion = this.cohesion(boids);
        let mouseAvoid = this.avoidMouse();

        separation.mult(1.8);
        alignment.mult(1.0);
        cohesion.mult(1.0);
        mouseAvoid.mult(2.5);

        this.applyForce(separation);
        this.applyForce(alignment);
        this.applyForce(cohesion);
        this.applyForce(mouseAvoid);
    }

    avoidMouse() {
        let mousePos = createVector(mouseX, mouseY);
        let avoidDistance = 80;
        let d = p5.Vector.dist(this.position, mousePos);

        if (d < avoidDistance && d > 0) {
            let flee = p5.Vector.sub(this.position, mousePos);
            flee.normalize();

            let strength = map(d, 0, avoidDistance, 25, 0);
            flee.mult(this.maxSpeed * strength);

            let steer = p5.Vector.sub(flee, this.velocity);
            steer.limit(this.maxForce * 2);
            return steer;
        }

        return createVector(0, 0);
    }

    update() {
        this.velocity.add(this.acceleration);
        this.velocity.limit(this.maxSpeed);
        this.position.add(this.velocity);
        this.acceleration.mult(0);
    }

    seek(target) {
        let desired = p5.Vector.sub(target, this.position);
        desired.normalize();
        desired.mult(this.maxSpeed);
        let steer = p5.Vector.sub(desired, this.velocity);
        steer.limit(this.maxForce);
        return steer;
    }

    render() {
        let theta = this.velocity.heading() + radians(45);

        let mousePos = createVector(mouseX, mouseY);
        let avoidDistance = 80;
        let d = p5.Vector.dist(this.position, mousePos);

        if (d < avoidDistance && d > 0) {
            let myBrightness = 82;
            let mySaturation = 95;
            this.color = color(94, mySaturation, myBrightness);
        } else {
            let myBrightness = 83;
            let mySaturation = 0;
            this.color = color(240, mySaturation, myBrightness);

        }


        fill(this.color);
        noStroke();

        push();
        translate(this.position.x, this.position.y);
        rotate(-theta);
       
        beginShape();

        vertex(0, this.size * 2.6);
        vertex(this.size * 0.6, this.size * 0.8);
        vertex(this.size * 2.5, this.size * 0.8);
        vertex(this.size * 0.9, -this.size * 0.4);
        vertex(this.size * 1.5, -this.size * 2.2);
        vertex(0, -this.size);
        vertex(-this.size * 1.5, -this.size * 2.2);
        vertex(-this.size * 0.9, -this.size * 0.4);
        vertex(-this.size * 2.5, this.size * 0.8);
        vertex(-this.size * 0.6, this.size * 0.8);

        endShape(CLOSE);
        pop();
    }

    borders() {
        if (this.position.x < -this.size) {
            this.position.x = width + this.size;
        }
        if (this.position.y < -this.size) {
            this.position.y = height + this.size;
        }
        if (this.position.x > width + this.size) {
            this.position.x = -this.size;
        }
        if (this.position.y > height + this.size) {
            this.position.y = -this.size;
        }
    }

    separate(boids) {
        let desiredSeparation = 35.0;
        let steer = createVector(0, 0);
        let count = 0;

        for (let boid of boids) {
            let distanceToNeighbor = p5.Vector.dist(this.position, boid.position);
            if (distanceToNeighbor > 0 && distanceToNeighbor < desiredSeparation) {
                let diff = p5.Vector.sub(this.position, boid.position);
                diff.normalize();
                diff.div(distanceToNeighbor);
                steer.add(diff);
                count++;
            }
        }

        if (count > 0) {
            steer.div(count);
        }

        if (steer.mag() > 0) {
            steer.normalize();
            steer.mult(this.maxSpeed);
            steer.sub(this.velocity);
            steer.limit(this.maxForce);
        }
        return steer;
    }

    align(boids) {
        let neighborDistance = 50;
        let sum = createVector(0, 0);
        let count = 0;
        for (let i = 0; i < boids.length; i++) {
            let d = p5.Vector.dist(this.position, boids[i].position);
            if (d > 0 && d < neighborDistance) {
                sum.add(boids[i].velocity);
                count++;
            }
        }
        if (count > 0) {
            sum.div(count);
            sum.normalize();
            sum.mult(this.maxSpeed);
            let steer = p5.Vector.sub(sum, this.velocity);
            steer.limit(this.maxForce);
            return steer;
        } else {
            return createVector(0, 0);
        }
    }

    cohesion(boids) {
        let neighborDistance = 50;
        let sum = createVector(0, 0);
        let count = 0;
        for (let i = 0; i < boids.length; i++) {
            let d = p5.Vector.dist(this.position, boids[i].position);
            if (d > 0 && d < neighborDistance) {
                sum.add(boids[i].position);
                count++;
            }
        }
        if (count > 0) {
            sum.div(count);
            return this.seek(sum);
        } else {
            return createVector(0, 0);
        }
    }
}