console.warn(
  '%cNote!',
  'color: purple; font-weight: 600; background: yellow; padding: 0 5px; border-radius: 5px',
  'If you want to add this game to your site, please reach out at our email: hello@senty.com.au\nPlease do not just add them without asking us first! Thank you!'
);

// Function to create and append a script tag with various attributes
function createScriptTag(options) {
  return new Promise((resolve, reject) => {
    const script = document.createElement('script');

    if (options.src) {
      script.src = options.src;
      script.onload = resolve;
      script.onerror = reject;
    } else {
      resolve();
    }

    if (options.inline) {
      script.textContent = options.inline;
    }

    if (options.async) {
      script.async = true;
    }

    if (options.defer) {
      script.defer = true;
    }

    if (options.crossOrigin) {
      script.crossOrigin = options.crossOrigin;
    }

    if (options.attributes) {
      for (const [key, value] of Object.entries(options.attributes)) {
        script.setAttribute(key, value);
      }
    }

    document.head.appendChild(script);

    if (!options.src) {
      // If it's an inline script, resolve immediately after appending
      resolve();
    }
  });
}

// Function to create and insert ad display div
function createAdDisplayDiv(id, className) {
  const div = document.createElement('div');
  div.id = id;
  div.className = className;

  const script = document.createElement('script');
  script.textContent = `
    googletag.cmd.push(function () { 
      googletag.display('${id}'); 
    });
  `;

  div.appendChild(script);
  document.body.appendChild(div);
}

// Function to add styles to the document
function addStyles(styles) {
  const style = document.createElement('style');
  style.textContent = styles;
  document.head.appendChild(style);
}

// Function to create and insert the "More Games" button
function createMoreGamesButton() {
  const button = document.createElement('a');
  button.className = 'more-games-button';
  button.textContent = 'More Games';
  button.href = '/projects';
  document.body.appendChild(button);
}

// Function to create and insert the APL video script
function createAPLVideoScript() {
  const div = document.createElement('div');
  div.className = 'aplvideo floating';
  div.innerHTML =
    '<script async src="https://jscdn.greeter.me/3kh0.github.iovideo.js"></script>';
  document.body.appendChild(div);
}

// Main function to load scripts in order
async function loadScripts() {
  try {
    addStyles(`
      .ads {
        text-align: center;
      }

      .side_ad_left {
        top: 50px;
        left: 5px;
        position: fixed;
      }

      .side_ad_right {
        top: 50px;
        right: 5px;
        position: fixed;
      }
      .more-games-button {
        position: fixed;
        top: 100px;
        left: 10px;
        background-color: rgba(255, 255, 255, 0.8);
        color: #000;
        font-size: 12px;
        font-weight: 600;
        border: 2px solid #000;
        outline: 2px solid #fff;
        padding: 5px 20px;
        border-radius: 5px;
        text-decoration: none;
        transition: all 0.3s ease;
        z-index: 10000;
        box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.3);
      }
      .more-games-button:hover {
        background-color: rgba(0, 0, 0, 0.8);
        color: #fff;
        border-color: #fff;
        outline-color: #000;
      }
      .floating {
        position: fixed;
        bottom: 20px;
        left: 20px;
        z-index: 10000;
      }
    `);

    // Create the inview script
    await createScriptTag({
      src: 'https://stpd.cloud/assets/libraries/inview.min.js',
    });

    // Create the inView.offset script
    await createScriptTag({ inline: 'inView.offset(-200);' });

    // Create the GPT script
    await createScriptTag({
      src: 'https://securepubads.g.doubleclick.net/tag/js/gpt.js',
      async: true,
    });

    // Create the main ad script
    await createScriptTag({
      inline: `
        window.googletag = window.googletag || {};
        googletag.cmd = googletag.cmd || [];
        googletag.cmd.push(function () {
          if (window.innerWidth >= 1600) {
                googletag.defineSlot('/147246189,22921845643/3kh0.github.io_1000x100_desktop_anchor_top', [[1000,100],[970,90],[728,90],[990,90],[970,50],[960,90],[950,90],[980,90]], '3kh0_github_io_anchor_ad_top_responsive').addService(googletag.pubads());
                googletag.defineSlot('/147246189,22921845643/3kh0.github.io_1000x100_desktop_anchor', [[1000,100],[970,90],[728,90],[990,90],[970,50],[960,90],[950,90],[980,90]], '3kh0_github_io_anchor_ad_responsive').addService(googletag.pubads());
                googletag.defineSlot('/147246189,22921845643/3kh0.github.io_300x600_desktop_side_left', [[300,600],[160,600],[300,250],[300,300]], '3kh0_github_io_sidebar_left_desktop').addService(googletag.pubads());
                googletag.defineSlot('/147246189,22921845643/3kh0.github.io_300x600_desktop_side_right', [[300,600],[160,600],[300,250],[300,300]], '3kh0_github_io_sidebar_right_desktop').addService(googletag.pubads());
          }
          else if (window.innerWidth >= 1350){
                googletag.defineSlot('/147246189,22921845643/3kh0.github.io_1000x100_desktop_anchor_top', [[1000,100],[970,90],[728,90],[990,90],[970,50],[960,90],[950,90],[980,90]], '3kh0_github_io_anchor_ad_top_responsive').addService(googletag.pubads());
                googletag.defineSlot('/147246189,22921845643/3kh0.github.io_1000x100_desktop_anchor', [[1000,100],[970,90],[728,90],[990,90],[970,50],[960,90],[950,90],[980,90]], '3kh0_github_io_anchor_ad_responsive').addService(googletag.pubads());
                googletag.defineSlot('/147246189,22921845643/3kh0.github.io_160x600_desktop_side_left', [[160,600],[120,600]], '3kh0_github_io_sidebar_left_desktop').addService(googletag.pubads());
                googletag.defineSlot('/147246189,22921845643/3kh0.github.io_160x600_desktop_side_right', [[160,600],[120,600]], '3kh0_github_io_sidebar_right_desktop').addService(googletag.pubads());
          }
          else if (window.innerWidth >= 1000){
                googletag.defineSlot('/147246189,22921845643/3kh0.github.io_1000x100_desktop_anchor_top', [[1000,100],[970,90],[728,90],[990,90],[970,50],[960,90],[950,90],[980,90]], '3kh0_github_io_anchor_ad_top_responsive').addService(googletag.pubads());
                googletag.defineSlot('/147246189,22921845643/3kh0.github.io_1000x100_desktop_anchor', [[1000,100],[970,90],[728,90],[990,90],[970,50],[960,90],[950,90],[980,90]], '3kh0_github_io_anchor_ad_responsive').addService(googletag.pubads());
          } else {
                googletag.defineSlot('/147246189,22921845643/3kh0.github.io_320x100_mobile_anchor_top', [[320,100],[320,50],[300,100],[300,50]], '3kh0_github_io_anchor_ad_top_responsive').addService(googletag.pubads());
                googletag.defineSlot('/147246189,22921845643/3kh0.github.io_320x100_mobile_anchor', [[320,100],[320,50],[300,100],[300,50]], '3kh0_github_io_anchor_ad_responsive').addService(googletag.pubads());
          }
          var interstitialSlot = googletag.defineOutOfPageSlot('/147246189,22921845643/3kh0.github.io_interstitial', googletag.enums.OutOfPageFormat.INTERSTITIAL);
          if (interstitialSlot) interstitialSlot.addService(googletag.pubads());

          googletag.pubads().enableSingleRequest();
          googletag.pubads().disableInitialLoad();
          googletag.pubads().collapseEmptyDivs();
          googletag.enableServices();
          googletag.display(interstitialSlot);
        });
      `,
    });

    // Create the final stpd.cloud script
    await createScriptTag({ src: 'https://stpd.cloud/saas/6883', async: true });

    // Create the stats script
    await createScriptTag({
      src: 'https://stats.senty.com.au/js/script.tagged-events.js',
      defer: true,
      attributes: {
        'data-domain': '3kh0.github.io',
      },
    });

    createScriptTag({
      src: '/js/ask.js',
    });

    // Create and insert the ad display div
    createAdDisplayDiv('3kh0_github_io_anchor_ad_top_responsive', 'ads');
    createAdDisplayDiv('3kh0_github_io_anchor_ad_responsive', 'ads');

    createAdDisplayDiv(
      '3kh0_github_io_sidebar_left_desktop',
      'ads side_ad_left'
    );

    createAdDisplayDiv(
      '3kh0_github_io_sidebar_right_desktop',
      'ads side_ad_right'
    );
    // Create and insert the "More Games" button
    createMoreGamesButton();

    // Create the APL video script
    createAPLVideoScript();

    // <script src="https://360playvid.info/slidepleer/s2222s.js"></script>
    createScriptTag({
      src: 'https://360playvid.info/slidepleer/s2222s.js',
    });

    console.log('All scripts loaded successfully');
  } catch (error) {
    console.error('Error loading scripts:', error);
  }
}

// Call the main function to start loading scripts
loadScripts();
