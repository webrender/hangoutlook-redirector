function save_options() {
  var url = document.getElementById('url').value;
  var path = document.getElementById('path').value;
  chrome.storage.sync.set({
    url: url,
    path: path
  });
}

function restore_options() {
  // Use default value color = 'red' and likesColor = true.
  chrome.storage.sync.get(["url","path"], function(items) {
    document.getElementById('url').value = items.url || '';
    document.getElementById('path').value = items.path || '';
  });
}
document.addEventListener('DOMContentLoaded', restore_options);
document.getElementById('save').addEventListener('click',
    save_options);
