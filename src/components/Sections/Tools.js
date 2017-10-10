import React from 'react';
import { StyleSheet, css } from 'aphrodite';
import ScrollableAnchor from 'react-scrollable-anchor';
import { TooltipHost } from 'office-ui-fabric-react/lib/Tooltip';
import { Label } from 'office-ui-fabric-react/lib/Label';

const ToolsSection = () => (
  <section className={css(styles.section)}>
    <ScrollableAnchor id="tools">
      <h2 className={css(styles.heading)}>
        Some other tools I've dabbled with<span style={{ color: '#a80000' }}>*</span>
      </h2>
    </ScrollableAnchor>
    &bull;&nbsp;HTML5&nbsp;,&nbsp;&bull;&nbsp;&nbsp;CSS3&nbsp;,&nbsp;&bull;&nbsp;&nbsp;React-Native&nbsp;,
    &nbsp;&bull;&nbsp;&nbsp;Markdown&nbsp;,&nbsp;&bull;&nbsp;&nbsp;jQuery&nbsp;, &bull;&nbsp;<TooltipHost
      content="Bootstrap, Material, Animate, NativeBase, Fabric, FontAwesome, WeatherIcons, etc."
      TooltipDelay="zero">
      UIKits&nbsp;,&nbsp;
    </TooltipHost>
    &bull;&nbsp;Pug&nbsp;,&nbsp;&bull;&nbsp;&nbsp;git&nbsp;,&nbsp;&bull;&nbsp;&nbsp;Unix Command
    Line&nbsp;,&nbsp;&bull;&nbsp;&nbsp;Chrome-Devtools&nbsp;,&nbsp;&bull;&nbsp;&nbsp;npm&nbsp;,&nbsp;&bull;&nbsp;&nbsp;MongoDB&nbsp;,
    &nbsp;&bull;&nbsp;&nbsp;nodejs&nbsp;,&nbsp;&bull;&nbsp;&nbsp;Sass&nbsp;,&nbsp;&bull;&nbsp;&nbsp;C++&nbsp;,
    &nbsp;&bull;&nbsp;&nbsp;D3&nbsp;,&nbsp;&bull;&nbsp;&nbsp;AppleScript&nbsp;,
    &bull;&nbsp;flow-typed&nbsp;,&nbsp;&bull;&nbsp;&nbsp;Apache
    Cordova&nbsp;,&nbsp;&bull;&nbsp;&nbsp;QBasic&nbsp;,&nbsp;&bull;&nbsp;&nbsp;Visual Basic&nbsp;
    <br />
    <br />
    <Label style={{ color: '#666' }}>
      <span style={{ color: '#a80000' }}>*</span>from most to least
    </Label>
  </section>
);

export default ToolsSection;

const styles = StyleSheet.create({
  section: {
    backgroundColor: '#eff6fc',
    padding: '60px 5%',
    width: '100%',
    fontSize: '15px',
    margin: 0,
    minWidth: '319px', //
    '@media (max-width: 319px)': {
      width: '319px',
    },
    '@media (max-width: 480px)': {
      paddingTop: '200px',
      paddingLeft: '5%',
      paddingRight: '5%',
      paddingBottom: '20px',
    },
    '@media (min-width: 1300px)': {
      fontSize: '17px',
    },
  },
  heading: {
    fontSize: '28px',
    fontFamily: 'Source Sans Pro ExtraLight',
    '@media (max-width: 480px)': {
      fontSize: '21px',
    },
    '@media (min-width: 1300px)': {
      fontSize: '32px',
    },
  },
});

//&bull;&nbsp;
//npm?
//overflow
