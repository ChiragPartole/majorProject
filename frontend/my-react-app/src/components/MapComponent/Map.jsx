import React from 'react';

const Map = () => {
  return (
    <div>
      <div className='tableauPlaceholder' id='viz1705833690430' style={{ position: 'relative' }}>
        <noscript>
          <a href='#'>
            <img
              alt='Crimes in India '
              src='https://public.tableau.com/static/images/HY/HYNQCW55N/1_rss.png'
              style={{ border: 'none' }}
            />
          </a>
        </noscript>
        <object className='tableauViz' style={{ display: 'none' }}>
          <param name='host_url' value='https%3A%2F%2Fpublic.tableau.com%2F' />
          <param name='embed_code_version' value='3' />
          <param name='path' value='shared/HYNQCW55N' />
          <param name='toolbar' value='yes' />
          <param name='static_image' value='https://public.tableau.com/static/images/HY/HYNQCW55N/1.png' />
          <param name='animate_transition' value='yes' />
          <param name='display_static_image' value='yes' />
          <param name='display_spinner' value='yes' />
          <param name='display_overlay' value='yes' />
          <param name='display_count' value='yes' />
          <param name='language' value='en-US' />
        </object>
      </div>
      <script type='text/javascript'>
        var divElement = document.getElementById('viz1705833690430');
        var vizElement = divElement.getElementsByTagName('object')[0];
        vizElement.style.width = '1300px';
        vizElement.style.height = '927px';
        var scriptElement = document.createElement('script');
        scriptElement.src = 'https://public.tableau.com/javascripts/api/viz_v1.js';
        vizElement.parentNode.insertBefore(scriptElement, vizElement);
      </script>
    </div>
  );
};

export default Map;
