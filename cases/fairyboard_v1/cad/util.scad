module edge_rounding(radius) {
    difference() {
        square(radius*2.5);
        circle(radius);
    }
}
