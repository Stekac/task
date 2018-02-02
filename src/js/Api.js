class Api {
  dummyData = "This is html from server, can be <b>bold</b> and also can be <b class='green-text'>with color</b>";

  getDummyData() {
    return new Promise((resolve, reject) => {
      if (this.dummyData.length > 0) {
        resolve(this.dummyData)
      } else {
        reject('No data!');
      }
    })
  }
}

export default new Api;