$(function() {
  new DevNotes()
})

class DevNotes {
  constructor() {
    this.fetchNotes()
    this.converter = new showdown.Converter({ extensions: ['codehighlight'] })
  }

  fetchNotes() {
    $.ajax({
      url: 'https://post-maker.herokuapp.com/posts',
      method: 'GET',
      success: (res) => {
        $('#loading-sign').addClass('hidden')
        $.each(res.posts, (i, post) => {
          this.appendToPage(post)
        })
      }
    })
  }

  appendToPage(post) {
    let $el = $('#post-list')

    let content = this.converter.makeHtml(post.body)
    let html = `
      <div class='container container-body'>
        <div class="profile-card with-shadow">
          <div class="profile-body">
            <div class="row">
              <div class="col-sm-12">
                <div class="profile-info">
                  <div class="profile-title">
                    <p><b>${post.title}</b></p>
                  </div>
                  ${content}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    `

    $el.append(html)
  }
}
