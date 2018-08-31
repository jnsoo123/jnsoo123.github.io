$(function(){
  new GreatReads()
})

class GreatReads {
  constructor() {
    this.fetchReads()
  }

  fetchReads() {
    $.ajax({
      url: 'http://localhost:3000/websites',
      method: 'GET',
      success: (response) => {
        $.each(response.websites, (i, site) => {
          this.addToWebsiteList(site)
        })
      }
    })
  }

  addToWebsiteList(site) {
    let $el = $('#great-reads__list')

    $el.append(`<li><a href='${site.url}'>${site.title}</a></li>`)
  }
}
