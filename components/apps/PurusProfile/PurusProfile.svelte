<script lang="ts">
  import { theme } from '🍎/stores/theme.store';
  import TwitterIcon from '~icons/mdi/twitter';
  import BlogIcon from '~icons/mdi/grease-pencil';
  import WorksIcon from '~icons/ic/round-workspaces';
  import GithubIcon from '~icons/mdi/github';
  import DevToIcon from '~icons/mdi/dev-to';

  function external(node: HTMLAnchorElement) {
    node.rel = 'noopener noreferrer';
    node.target = '_blank';
  }
</script>

<section class="container">
  <header class="titlebar app-window-drag-handle">
    <span style="margin-left: -12rem;">The Developer's Information</span>
  </header>

  <aside class:light={$theme.scheme === 'light'}>
    <nav>
      <a href="https://freemindcode.blogspot.com/" use:external> <BlogIcon /> Blogs </a>
      <a href="https://github.com/devsujay19?tab=repositories" use:external> <WorksIcon /> Works </a>

      <hr />

      <a href="https://twitter.com/devsujay19" use:external>
        <TwitterIcon />
        Twitter/X
      </a>
      <a href="https://github.com/devsujay19" use:external> <GithubIcon /> Github </a>
      <a href="https://dev.to/devsujay19" use:external> <DevToIcon /> Dev.to </a>
    </nav>
  </aside>

  <section class="content">
    <img height="200" width="200" src="/dev-profile/fbimg.webp" alt="Sujay's Portrait" style="object-fit: cover;" />

    <br />

    <h1>Hello, I'm Sujay Mukherjee</h1>

    <p style="text-align: center;">
      I re-created macOS's desktop version in web, actually where you are right now. I always want to use macOS once in my life but I never got one, so I analysed macOS from different platforms like sometimes from Google Chrome or YouTube and sometimes from Apple's official website's Mac's section/page, blog sites and images. Then I started the process of re-creation of macOS's web version... 
    </p>

    <br />

    <p style="text-align: center;">
      By the way, I am a MERN + MEAN-Stack Developer and Android + iOS + Desktop Application Developer, with an infinite amount of love for Front-end and Back-end Web Development,
      I also love to develop cross-platform appliactions and writing scripts for Back-end.
    </p>

    <br /><br />

    <p style="text-align: center;">
      However, I didn't stop there. Even today, I am writing codes for my better future and for my entertainment also. <img src="/emojis/wink.png" alt="Wink Emoji" width="20px" height="20px" />, I am currently practicing Java language to be enrolled in a coding bootcamp/codefest/hackathon. So... You can follow me on Facebook, Github, Twitter, DEV, Instagram, if you have a account on those platforms, and you can also send me Emails on my Email IDs/Addresses which are - <a href="mailto:developer.sujay19" style="text-decoration: none; color: limegreen;">developer.sujay19@gmail.com</a> and <a href="mailto:sujay.mukherjeedev@gmail.com" style="text-decoration: none; color: limegreen;">sujay.mukherjeedev@gmail.com</a>.
      <br />
      <br />
      <br />
      <br />
    </p>
  </section>
</section>

<style lang="scss">
  .container {
    --color: var(--system-color-light-hsl);

    display: grid;
    grid-template-columns: 12rem 1fr;
    grid-template-rows: 3rem 1fr;

    border-radius: inherit;

    background-image: linear-gradient(
      to right,
      hsla(var(--color), 0.7) 12rem,
      hsla(var(--color), 1) 12rem 100%
    );

    transition: --color 200ms ease-in;

    color: var(--system-color-dark);
  }

  .titlebar {
    grid-area: 1 / 1 / span 1 / span 2;

    display: flex;
    justify-content: center;

    z-index: 1;

    padding: 0.9rem 1rem;

    width: 100%;

    border-top-left-radius: inherit;
    border-top-right-radius: inherit;

    user-select: none;

    span {
      color: hsla(var(--system-color-dark-hsl), 0.8);
      font-weight: 500;
      font-size: 0.9rem;
      letter-spacing: 0.5px;
    }
  }

  aside {
    grid-area: 1 / 1 / span 2 / span 1;

    transform: translateZ(0);

    height: calc(100% - 2.7px);
    width: calc(12rem - 2.27px);

    margin: 1.8px 0 0px 1.8px;

    border-top-left-radius: 0.5rem;
    border-bottom-left-radius: inherit;

    &::before {
      content: '';

      width: inherit;
      height: inherit;

      border-radius: inherit;

      position: fixed;
      left: 0;
      top: 0;

      z-index: -1;
      backdrop-filter: blur(12px);
    }

    &.light {
      height: calc(100% - 3px);
      width: calc(12rem - 2.5px);

      margin: 1.7px 0 0px 1.7px;

      border-top-left-radius: 0.5rem;
      border-bottom-left-radius: 0.5rem;
    }

    nav {
      display: flex;
      flex-direction: column;
      gap: 0.2rem;

      margin: 4rem 0.6rem;

      hr {
        display: block;

        width: 100%;
        height: 1px;

        background-color: hsla(var(--system-color-dark-hsl), 0.2);

        border: none;
      }

      a {
        display: flex;
        gap: 0.4rem;
        align-items: center;

        color: hsla(var(--system-color-dark-hsl), 0.9);
        text-decoration: none;
        font-weight: 400;

        padding: 0.5rem 0.5rem;

        border-radius: 0.4rem;

        transition: background-color 100ms ease;

        &:hover {
          background-color: hsla(var(--system-color-dark-hsl), 0.2);
        }
      }
    }
  }

  .content {
    grid-area: 2 / 2 / span 1 / span 1;

    display: flex;
    flex-direction: column;
    align-items: center;

    padding: 1rem;

    img {
      border-radius: 50%;
    }
  }

  .emoji {
    height: 1em;
    width: 1em;

    vertical-align: middle;
  }

  h1 {
    font-size: 2.618rem;
    line-height: 1.618;
  }

  h2 {
    font-size: 1.618rem;
    line-height: 1.2;
  }

  p {
    line-height: 1.618rem;
  }
</style>
