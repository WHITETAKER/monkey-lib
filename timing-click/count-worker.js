let self = this;

function timer(time) {
    if (time < 0) {
        self.postMessage(-1);
        return self.close();
    }
    self.postMessage(time / 1000);
    setTimeout(() => {
        timer(time - 1000);
    }, 1000)
}

self.onmessage = function (event) {
    if (!event.data) return 0;
    let second = event.data;
    timer(second);
};