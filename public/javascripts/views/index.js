let imageIndex = 0;
  let imageList = ['/file/getImages/aqua.jpg', '/file/getImages/caoyuan.png', '/file/getImages/clund.jpg', '/file/getImages/dao.jpg', '/file/getImages/header.jpg', '/file/getImages/qipao.png'];
  let list = document.getElementById('imageList');
  function getImageFilePath () {
    if (imageIndex === imageList.length) {
      imageIndex = 0;
    }
    let path = imageList[imageIndex];
    imageIndex++;
    return path;
  }
  function getImage () {
    axios.get(getImageFilePath(),{
      responseType: 'arraybuffer'
    }).then((res) => {
      console.log(res)
      let imageNode = document.createElement('img');
      imageNode.src = res.config.url;
      imageNode.className = "image-item";
      list.appendChild(imageNode);
    })
  }
  function uploadImage () {
    let reads = new FileReader();
    let file = document.getElementById('fileInput').files[0];
    let formData = new FormData();
    formData.append("file",file,file.name);
    axios.post('/file/upload',formData).then((res) => {
      
    })
  }