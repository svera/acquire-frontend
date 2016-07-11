import React from 'react';

class Bevel extends React.Component {

/*
  render() {
    return (
      <filter id="Bevel" filterUnits="objectBoundingBox" x="-10%" y="-10%" width="150%" height="150%">
        <feGaussianBlur in="SourceAlpha" stdDeviation="0.5" result="blur"/>
        <feSpecularLighting in="blur" surfaceScale="5" specularConstant="0.5" specularExponent="10" result="specOut" lighting-color="white">
          <fePointLight x="-5000" y="-10000" z="0000"/>
        </feSpecularLighting>
        <feComposite in="specOut" in2="SourceAlpha" operator="in" result="specOut2"/>
        <feComposite in="SourceGraphic" in2="specOut2" operator="arithmetic" k1="0" k2="1" k3="1" k4="0" result="litPaint" />
      </filter>
    );
  }
*/

  render() {
    return (
    <filter id="Bevel" x0="-50%" y0="-50%" width="200%" height="200%">
    			<feGaussianBlur in="SourceAlpha" stdDeviation="2" result="blur"/>
    			<feOffset dy="-1" dx="-1"/>
    			<feComposite in2="SourceAlpha" operator="arithmetic"
    					k2="-1" k3="1" result="hlDiff"/>
    			<feFlood flood-color="white" flood-opacity=".7"/>
    			<feComposite in2="hlDiff" operator="in"/>
    			<feComposite in2="SourceGraphic" operator="over" result="withGlow"/>

    			<feOffset in="blur" dy="3" dx="3"/>
    			<feComposite in2="SourceAlpha" operator="arithmetic"
    					k2="-1" k3="1" result="shadowDiff"/>
    			<feFlood flood-color="black" flood-opacity="1"/>
    			<feComposite in2="shadowDiff" operator="in"/>
    			<feComposite in2="withGlow" operator="over"/>
    		</filter>
      );
  }

}

export default Bevel;
