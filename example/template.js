export const main = `<div class="d-flex flex-column min-vh-100">
    <main class="flex-grow-1">
      <section class="container-fluid bg-dark p-5 js-form">
        <div class="row">
          <div class="col-md-10 col-lg-8 mx-auto text-white">
            <h1 class="display-3 mb-0" data-i18n="rssForm.title">
              RSS агрегатор
            </h1>
            <p class="lead" data-i18n="rssForm.subtitle">
              Начните читать RSS сегодня! Это легко, это красиво.
            </p>
            <form class="rss-form text-body">
              <div class="row">
                <div class="col-12 col-sm-8 mb-3 mb-sm-0">
                  <div class="form-floating">
                    <input
                      class="form-control w-100"
                      id="url-input"
                      name="url"
                      aria-label="url"
                      autoComplete="off"
                      placeholder="Ссылка RSS"
                      required=""
                    />
                    <label htmlFor="url-input" data-i18n="rssForm.inputText">
                      Ссылка RSS
                    </label>
                  </div>
                </div>
                <div class="col-12 col-sm-4">
                  <button
                    class="h-100 btn btn-lg btn-primary px-sm-5"
                    type="submit"
                    aria-label="add"
                    data-i18n="rssForm.buttonText"
                  >
                    Добавить
                  </button>
                </div>
              </div>
            </form>
            <p class="text-white-50 mt-2 mb-0" data-i18n="rssForm.descriptionText">
              Пример: https://lorem-rss.hexlet.app/feed
            </p>
            <p
              class="feedback m-0 position-absolute small text-danger"
              data-i18n="rssForm.errorMessages"
            ></p>
          </div>
        </div>
      </section>
      <section class="container-fluid container-xxl p-5 js-feeds">
        <div class="row">
          <div class="col-md-10 col-lg-8 order-1 mx-auto posts">
            <div class="card border-0">
              <div class="card-body posts-card-body"></div>
              <ul class="list-group list-group-posts border-0 rounded-0"></ul>
            </div>
          </div>
          <div class="col-md-10 col-lg-4 mx-auto order-0 order-lg-1 feeds">
            <div class="card border-0">
              <div class="card-body feeds-card-body"></div>
              <ul class="list-group list-group-feeds border-0 rounded-0"></ul>
            </div>
          </div>
        </div>
      </section>
    </main>
    <footer class="footer border-top py-3 mt-5 bg-light">
      <div class="container-xl">
        <p class="text-center my-0">
          ссылка на
          <a href="https://github.com/iibadreeva/middle-frontend-project-11" target="_blank">
            github
          </a>
        </p>
      </div>
    </footer>
    <div
      class="modal fade"
      id="modal"
      tabIndex="-1"
      aria-labelledby="modalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h1 class="modal-title fs-5" id="modalLabel">
              Modal title
            </h1>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body text-break"></div>
          <div class="modal-footer">
            <a
              class="btn btn-primary full-article"
              href="#"
              target="_blank"
              data-i18n="modalWindow.mainButton"
            >
              Читать полностью
            </a>
            <button
              type="button"
              class="btn btn-secondary"
              data-bs-dismiss="modal"
              data-i18n="modalWindow.secondaryButton"
            >
              Закрыть
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>`;

export const neutral = `<div class="col-md-10 col-lg-8 mx-auto text-white">
    <h1 class="display-3 mb-0" data-i18n="rssForm.title">
      RSS агрегатор
    </h1>
    <p class="lead" data-i18n="rssForm.subtitle">
      Начните читать RSS сегодня! Это легко, это красиво.
    </p>
    <form class="rss-form text-body">
      <div class="row">
        <div class="col-12 col-sm-8 mb-3 mb-sm-0">
          <div class="form-floating">
            <input
              class="form-control w-100"
              id="url-input"
              name="url"
              aria-label="url"
              autoComplete="off"
              placeholder="Ссылка RSS"
              required=""
            />
            <label htmlFor="url-input" data-i18n="rssForm.inputText">
              Ссылка RSS
            </label>
          </div>
        </div>
        <div class="col-12 col-sm-4">
          <button
            class="h-100 btn btn-lg btn-primary px-sm-5"
            type="submit"
            aria-label="add"
            data-i18n="rssForm.buttonText"
          >
            Добавить
          </button>
        </div>
      </div>
    </form>
    <p class="text-white-50 mt-2 mb-0" data-i18n="rssForm.descriptionText">
      Пример: https://lorem-rss.hexlet.app/feed
    </p>
    <p
      class="feedback m-0 position-absolute small text-danger"
      data-i18n="rssForm.errorMessages"
    ></p>
  </div>`;

export const successful = `<div class="col-md-10 col-lg-8 mx-auto text-white">
    <h1 class="display-3 mb-0" data-i18n="rssForm.title">
      RSS агрегатор
    </h1>
    <p class="lead" data-i18n="rssForm.subtitle">
      Начните читать RSS сегодня! Это легко, это красиво.
    </p>
    <form class="rss-form text-body">
      <div class="row">
        <div class="col-12 col-sm-8 mb-3 mb-sm-0">
          <div class="form-floating">
            <input
              class="form-control w-100"
              id="url-input"
              name="url"
              aria-label="url"
              autoComplete="off"
              placeholder="Ссылка RSS"
              required=""
            />
            <label htmlFor="url-input" data-i18n="rssForm.inputText">
              Ссылка RSS
            </label>
          </div>
        </div>
        <div class="col-12 col-sm-4">
          <button
            class="h-100 btn btn-lg btn-primary px-sm-5"
            type="submit"
            aria-label="add"
            data-i18n="rssForm.buttonText"
          >
            Добавить
          </button>
        </div>
      </div>
    </form>
    <p class="text-white-50 mt-2 mb-0" data-i18n="rssForm.descriptionText">
      Пример: https://lorem-rss.hexlet.app/feed
    </p>
    <p
      class="feedback m-0 position-absolute small text-success"
      data-i18n="rssForm.errorMessages"
    >
      RSS успешно загружен
    </p>
  </div>`;

export const error = `<div class="col-md-10 col-lg-8 mx-auto text-white">
    <h1 class="display-3 mb-0" data-i18n="rssForm.title">
      RSS агрегатор
    </h1>
    <p class="lead" data-i18n="rssForm.subtitle">
      Начните читать RSS сегодня! Это легко, это красиво.
    </p>
    <form class="rss-form text-body">
      <div class="row">
        <div class="col-12 col-sm-8 mb-3 mb-sm-0">
          <div class="form-floating">
            <input
              class="form-control w-100 is-invalid"
              id="url-input"
              name="url"
              aria-label="url"
              autoComplete="off"
              placeholder="Ссылка RSS"
              required=""
            />
            <label htmlFor="url-input" data-i18n="rssForm.inputText">
              Ссылка RSS
            </label>
          </div>
        </div>
        <div class="col-12 col-sm-4">
          <button
            class="h-100 btn btn-lg btn-primary px-sm-5"
            type="submit"
            aria-label="add"
            data-i18n="rssForm.buttonText"
          >
            Добавить
          </button>
        </div>
      </div>
    </form>
    <p class="text-white-50 mt-2 mb-0" data-i18n="rssForm.descriptionText">
      Пример: https://lorem-rss.hexlet.app/feed
    </p>
    <p
      class="feedback m-0 position-absolute small text-danger"
      data-i18n="rssForm.errorMessages"
    >
      Ссылка должна быть валидным URL
    </p>
  </div>`;

export const feeds = `<div class="row">
  <div class="col-md-10 col-lg-8 order-1 mx-auto posts">
    <div class="card border-0">
      <div class="card-body posts-card-body">
        <h2 class="card-title h4">Посты</h2></div>
      <ul class="list-group list-group-posts border-0 rounded-0">
        <li class="list-group-item d-flex justify-content-between align-items-start border-0 border-end-0"><a class="fw-bold" href="http://example.com/test/1776064860" data-id="http://example.com/test/1776064860" target="_blank" rel="noopener noreferrer">Lorem ipsum 2026-04-13T07:21:00Z</a>
          <button class="btn btn-outline-primary btn-sm" type="button" data-id="http://example.com/test/1776064860" data-bs-toggle="modal" data-bs-target="#modal">Просмотр</button>
        </li>
        <li class="list-group-item d-flex justify-content-between align-items-start border-0 border-end-0"><a class="fw-bold" href="http://example.com/test/1776064800" data-id="http://example.com/test/1776064800" target="_blank" rel="noopener noreferrer">Lorem ipsum 2026-04-13T07:20:00Z</a>
          <button class="btn btn-outline-primary btn-sm" type="button" data-id="http://example.com/test/1776064800" data-bs-toggle="modal" data-bs-target="#modal">Просмотр</button>
        </li>
        <li class="list-group-item d-flex justify-content-between align-items-start border-0 border-end-0"><a class="fw-bold" href="http://example.com/test/1776064740" data-id="http://example.com/test/1776064740" target="_blank" rel="noopener noreferrer">Lorem ipsum 2026-04-13T07:19:00Z</a>
          <button class="btn btn-outline-primary btn-sm" type="button" data-id="http://example.com/test/1776064740" data-bs-toggle="modal" data-bs-target="#modal">Просмотр</button>
        </li>
        <li class="list-group-item d-flex justify-content-between align-items-start border-0 border-end-0"><a class="fw-bold" href="http://example.com/test/1776064680" data-id="http://example.com/test/1776064680" target="_blank" rel="noopener noreferrer">Lorem ipsum 2026-04-13T07:18:00Z</a>
          <button class="btn btn-outline-primary btn-sm" type="button" data-id="http://example.com/test/1776064680" data-bs-toggle="modal" data-bs-target="#modal">Просмотр</button>
        </li>
        <li class="list-group-item d-flex justify-content-between align-items-start border-0 border-end-0"><a class="fw-bold" href="http://example.com/test/1776064620" data-id="http://example.com/test/1776064620" target="_blank" rel="noopener noreferrer">Lorem ipsum 2026-04-13T07:17:00Z</a>
          <button class="btn btn-outline-primary btn-sm" type="button" data-id="http://example.com/test/1776064620" data-bs-toggle="modal" data-bs-target="#modal">Просмотр</button>
        </li>
        <li class="list-group-item d-flex justify-content-between align-items-start border-0 border-end-0"><a class="fw-bold" href="http://example.com/test/1776064560" data-id="http://example.com/test/1776064560" target="_blank" rel="noopener noreferrer">Lorem ipsum 2026-04-13T07:16:00Z</a>
          <button class="btn btn-outline-primary btn-sm" type="button" data-id="http://example.com/test/1776064560" data-bs-toggle="modal" data-bs-target="#modal">Просмотр</button>
        </li>
        <li class="list-group-item d-flex justify-content-between align-items-start border-0 border-end-0"><a class="fw-bold" href="http://example.com/test/1776064500" data-id="http://example.com/test/1776064500" target="_blank" rel="noopener noreferrer">Lorem ipsum 2026-04-13T07:15:00Z</a>
          <button class="btn btn-outline-primary btn-sm" type="button" data-id="http://example.com/test/1776064500" data-bs-toggle="modal" data-bs-target="#modal">Просмотр</button>
        </li>
        <li class="list-group-item d-flex justify-content-between align-items-start border-0 border-end-0"><a class="fw-bold" href="http://example.com/test/1776064440" data-id="http://example.com/test/1776064440" target="_blank" rel="noopener noreferrer">Lorem ipsum 2026-04-13T07:14:00Z</a>
          <button class="btn btn-outline-primary btn-sm" type="button" data-id="http://example.com/test/1776064440" data-bs-toggle="modal" data-bs-target="#modal">Просмотр</button>
        </li>
        <li class="list-group-item d-flex justify-content-between align-items-start border-0 border-end-0"><a class="fw-bold" href="http://example.com/test/1776063840" data-id="http://example.com/test/1776063840" target="_blank" rel="noopener noreferrer">Lorem ipsum 2026-04-13T07:04:00Z</a>
          <button class="btn btn-outline-primary btn-sm" type="button" data-id="http://example.com/test/1776063840" data-bs-toggle="modal" data-bs-target="#modal">Просмотр</button>
        </li>
        <li class="list-group-item d-flex justify-content-between align-items-start border-0 border-end-0"><a class="fw-bold" href="http://example.com/test/1776063900" data-id="http://example.com/test/1776063900" target="_blank" rel="noopener noreferrer">Lorem ipsum 2026-04-13T07:05:00Z</a>
          <button class="btn btn-outline-primary btn-sm" type="button" data-id="http://example.com/test/1776063900" data-bs-toggle="modal" data-bs-target="#modal">Просмотр</button>
        </li>
        <li class="list-group-item d-flex justify-content-between align-items-start border-0 border-end-0"><a class="fw-bold" href="http://example.com/test/1776063960" data-id="http://example.com/test/1776063960" target="_blank" rel="noopener noreferrer">Lorem ipsum 2026-04-13T07:06:00Z</a>
          <button class="btn btn-outline-primary btn-sm" type="button" data-id="http://example.com/test/1776063960" data-bs-toggle="modal" data-bs-target="#modal">Просмотр</button>
        </li>
        <li class="list-group-item d-flex justify-content-between align-items-start border-0 border-end-0"><a class="fw-bold" href="http://example.com/test/1776064020" data-id="http://example.com/test/1776064020" target="_blank" rel="noopener noreferrer">Lorem ipsum 2026-04-13T07:07:00Z</a>
          <button class="btn btn-outline-primary btn-sm" type="button" data-id="http://example.com/test/1776064020" data-bs-toggle="modal" data-bs-target="#modal">Просмотр</button>
        </li>
        <li class="list-group-item d-flex justify-content-between align-items-start border-0 border-end-0"><a class="fw-bold" href="http://example.com/test/1776064080" data-id="http://example.com/test/1776064080" target="_blank" rel="noopener noreferrer">Lorem ipsum 2026-04-13T07:08:00Z</a>
          <button class="btn btn-outline-primary btn-sm" type="button" data-id="http://example.com/test/1776064080" data-bs-toggle="modal" data-bs-target="#modal">Просмотр</button>
        </li>
        <li class="list-group-item d-flex justify-content-between align-items-start border-0 border-end-0"><a class="fw-bold" href="http://example.com/test/1776064140" data-id="http://example.com/test/1776064140" target="_blank" rel="noopener noreferrer">Lorem ipsum 2026-04-13T07:09:00Z</a>
          <button class="btn btn-outline-primary btn-sm" type="button" data-id="http://example.com/test/1776064140" data-bs-toggle="modal" data-bs-target="#modal">Просмотр</button>
        </li>
        <li class="list-group-item d-flex justify-content-between align-items-start border-0 border-end-0"><a class="fw-bold" href="http://example.com/test/1776064200" data-id="http://example.com/test/1776064200" target="_blank" rel="noopener noreferrer">Lorem ipsum 2026-04-13T07:10:00Z</a>
          <button class="btn btn-outline-primary btn-sm" type="button" data-id="http://example.com/test/1776064200" data-bs-toggle="modal" data-bs-target="#modal">Просмотр</button>
        </li>
        <li class="list-group-item d-flex justify-content-between align-items-start border-0 border-end-0"><a class="fw-bold" href="http://example.com/test/1776064260" data-id="http://example.com/test/1776064260" target="_blank" rel="noopener noreferrer">Lorem ipsum 2026-04-13T07:11:00Z</a>
          <button class="btn btn-outline-primary btn-sm" type="button" data-id="http://example.com/test/1776064260" data-bs-toggle="modal" data-bs-target="#modal">Просмотр</button>
        </li>
        <li class="list-group-item d-flex justify-content-between align-items-start border-0 border-end-0"><a class="fw-bold" href="http://example.com/test/1776064320" data-id="http://example.com/test/1776064320" target="_blank" rel="noopener noreferrer">Lorem ipsum 2026-04-13T07:12:00Z</a>
          <button class="btn btn-outline-primary btn-sm" type="button" data-id="http://example.com/test/1776064320" data-bs-toggle="modal" data-bs-target="#modal">Просмотр</button>
        </li>
        <li class="list-group-item d-flex justify-content-between align-items-start border-0 border-end-0"><a class="fw-bold" href="http://example.com/test/1776064380" data-id="http://example.com/test/1776064380" target="_blank" rel="noopener noreferrer">Lorem ipsum 2026-04-13T07:13:00Z</a>
          <button class="btn btn-outline-primary btn-sm" type="button" data-id="http://example.com/test/1776064380" data-bs-toggle="modal" data-bs-target="#modal">Просмотр</button>
        </li>
      </ul>
    </div>
  </div>
  <div class="col-md-10 col-lg-4 mx-auto order-0 order-lg-1 feeds">
    <div class="card border-0">
      <div class="card-body feeds-card-body">
        <h2 class="card-title h4">Фиды</h2></div>
      <ul class="list-group list-group-feeds border-0 rounded-0">
        <li class="list-group-item border-0 border-end-0">
          <h3 class="h6 m-0">Lorem ipsum feed for an interval of 1 minutes with 10 item(s)</h3>
          <p class="feed-description m-0 small text-black-50">This is a constantly updating lorem ipsum feed</p>
        </li>
      </ul>
    </div>
  </div>
</div>`;
