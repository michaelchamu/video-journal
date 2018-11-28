function getVideoImage(path, secs, callback) {
    var me = this,
        video = document.createElement('video');
    video.onloadedmetadata = function() {
        if ('function' === typeof secs) {
            secs = secs(this.duration);
        }
        this.currentTime = Math.min(Math.max(0, (secs < 0 ? this.duration : 0) + secs), this.duration);
    };
    video.onseeked = function(e) {
        var canvas = document.createElement('canvas');
        canvas.height = video.videoHeight;
        canvas.width = video.videoWidth;
        var ctx = canvas.getContext('2d');
        ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
        var img = new Image();
        img.src = canvas.toDataURL();
        img.className = 'col-xs-12 col-sm-12';
        img.addEventListener("click", function() {
            setVideoPath(path);
        });
        img.onclick = 'alert(\'image clicked\')';
        callback.call(me, img, this.currentTime, e);
    };
    video.onerror = function(e) {
        callback.call(me, undefined, undefined, e);
    };
    video.src = path;
}

function showImageAt(secs, id) {
    var duration;
    //alert('Video/' + id + '.mp4');
    getVideoImage(
        'Video/' + id + '.mp4',
        function(totalTime) {
            duration = totalTime;
            return secs;
        },
        function(img, secs, event) {
            if (event.type == 'seeked') {
                document.getElementById(id).appendChild(img);
                if (duration >= ++secs) {
                    showImageAt(secs);
                };
            }
        }
    );
}

function showCommentImageAt(secs, id, video) {
    var duration;
    //alert('Video/' + id + '.mp4');
    getVideoImage(
        'Video/' + video + '.mp4',
        function(totalTime) {
            duration = totalTime;
            return secs;
        },
        function(img, secs, event) {
            if (event.type == 'seeked') {
                document.getElementById(id).appendChild(img);
                if (duration >= ++secs) {
                    showImageAt(secs);
                };
            }
        }
    );
}

function setVideoPath(path) {
    $('#video').remove();

    var video = $('<video />', {
        id: 'video',
        src: path,
        class: 'col-xs-12',
        type: 'video/mp4',
        controls: true
    });

    video.appendTo($('#video_container'));

    $('#myModal').modal('show');

    // var video = $('#video_source')[0];
    // video.src = path;
    // video.load();

    // videoElement.attr('src', path);
    // videoElement.load();
    // $('#video_source').attr('src', path);
}

showImageAt(3, 'video1');
showImageAt(3, 'video2');
showImageAt(3, 'video3');
showImageAt(3, 'video4');
showImageAt(3, 'video5');
showImageAt(3, 'video6');


showCommentImageAt(14.7, 'reaction1', 'video1');
showCommentImageAt(14.7, 'reaction2', 'video2');
showCommentImageAt(14.7, 'reaction3', 'video3');
showCommentImageAt(14.7, 'reaction4', 'video4');
showCommentImageAt(14.7, 'reaction5', 'video5');
showCommentImageAt(14.7, 'reaction6', 'video6');

showCommentImageAt(14.7, 'videoSnippet', 'video1');