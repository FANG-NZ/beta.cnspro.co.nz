import React, { useEffect, useRef, useLayoutEffect } from 'react'
import Link from 'next/link'

/**
 * This is for Slider section
 * At this stage, we just use jquery plugin, we will replace with REACT MODULE for this
 * @returns 
 */
 const SliderSection = () => {
    const sectionRef = useRef()
  
    //we use useLayoutEffect
    //to init slider & remove slider
    useLayoutEffect(() => {

        //To init slider
        $.revSlider.init()

        return() => {
            $.revSlider.destory()
        }

    }, [sectionRef.current])
  
  
    return(
      <section ref={sectionRef}>
          <div className="rev_slider_wrapper rev_slider_wrapper--p80 tp-overflow-hidden">
              <div className="rev_slider fullwidthabanner js-rev" 
                data-version="5.4.4" 
                style={{display:'none'}} 
                data-rev-layout="fullscreen" 
                data-rev-stylearrow="au-rev-arrow-1" 
                data-rev-bullets="true" data-rev-stylebullet="au-rev-bullet-1" data-rev-voffbullet="55">
                  <ul>
                      <li className="rev-item rev-item-1" data-transition="crossfade">
                          <img className="rev-slidebg" src="https://freebw.com/templates/tatee/images/slide-01.jpg" alt="Master Slider 01" />
  
                          <h4 className="tp-caption tp-resizeme rev-text-1" data-frames="[{&quot;delay&quot;:0,&quot;speed&quot;:1800,&quot;frame&quot;:&quot;0&quot;,&quot;from&quot;:&quot;y:[-100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;&quot;,&quot;mask&quot;:&quot;x:0px;y:0px;s:inherit;e:inherit;&quot;,&quot;to&quot;:&quot;o:1;&quot;,&quot;ease&quot;:&quot;Power3.easeInOut&quot;},{&quot;delay&quot;:&quot;wait&quot;,&quot;speed&quot;:800,&quot;frame&quot;:&quot;999&quot;,&quot;to&quot;:&quot;auto:auto;&quot;,&quot;ease&quot;:&quot;Power3.easeInOut&quot;}]"
                          data-x="['left']" data-y="['middle']" data-hoffset="[0, 0, 0, 0, 0]" data-voffset="[-118, -118, -70, -80, -80]" data-paddingleft="[0, 0, 0, 0, 15]" data-paddingright="[0, 0, 0, 0, 15]" data-width="['auto']" data-height="[&quot;auto&quot;]"
                          data-whitespace="[nowrap, nowrap, nowrap, nowrap, nowrap]" data-color="#fff" data-fontweight="400" data-fontsize="[11, 11, 18, 20, 20]" data-textalign="[left, left, left, center, center]">architecture</h4>
                          
                          <h2 className="tp-caption tp-resizeme rev-text-2" data-frames="[{&quot;delay&quot;:800,&quot;speed&quot;:2100,&quot;frame&quot;:&quot;0&quot;,&quot;from&quot;:&quot;x:[-100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;&quot;,&quot;mask&quot;:&quot;x:0px;y:0px;s:inherit;e:inherit;&quot;,&quot;to&quot;:&quot;o:1;&quot;,&quot;ease&quot;:&quot;Power3.easeInOut&quot;},{&quot;delay&quot;:&quot;wait&quot;,&quot;speed&quot;:800,&quot;frame&quot;:&quot;999&quot;,&quot;to&quot;:&quot;auto:auto;&quot;,&quot;ease&quot;:&quot;Power3.easeInOut&quot;}]"
                          data-x="[left]" data-y="[center]" data-hoffset="[0, 0, 0, 0, 0]" data-voffset="[-35, -30, 15, 10, 10]" data-paddingleft="[0, 0, 0, 0, 15]" data-paddingright="[0, 0, 0, 0, 15]" data-width="[600,600,500,576,500]" data-height="[&quot;auto&quot;]"
                          data-lineheight="[60, 60, 45, 50, 45]" data-whitespace="normal" data-color="#fff" data-fontweight="700" data-fontsize="[48, 48, 46, 42, 46]" data-textalign="[left, left, left, left, left]">Modern villa on the mountain</h2>
                          
                          <Link href="/project">
                            <a className="tp-caption tp-resizeme" href="#" target="_self" data-frames="[{&quot;delay&quot;:0,&quot;speed&quot;:1800,&quot;frame&quot;:&quot;0&quot;,&quot;from&quot;:&quot;y:[100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;opacity:0;&quot;,&quot;mask&quot;:&quot;x:0px;y:[100%];s:inherit;e:inherit;&quot;,&quot;to&quot;:&quot;o:1;&quot;,&quot;ease&quot;:&quot;Power2.easeInOut&quot;},{&quot;delay&quot;:&quot;wait&quot;,&quot;speed&quot;:800,&quot;frame&quot;:&quot;999&quot;,&quot;to&quot;:&quot;auto:auto;&quot;,&quot;ease&quot;:&quot;Power3.easeInOut&quot;}]"
                            data-x="[left]" data-y="[center]" data-hoffset="[0, 0, 0, 0, 15]" data-voffset="[87, 87, 130, 130, 130]" data-width="['auto']" data-height="[&quot;auto&quot;]" data-responsive_offset="on" data-responsive="off" data-whitespace="[nowrap, nowrap, nowrap, nowrap, nowrap]">
                                <span className="rev-btn-1">See project
                                    <span className="arrow" data-paddingleft="5">
                                        <i className="zmdi zmdi-arrow-right"></i>
                                    </span>
                                </span>
                            </a>
                          </Link>
                      </li>

                      <li className="rev-item rev-item-1" data-transition="slotslide-horizontal">
                          <img className="rev-slidebg" src="https://freebw.com/templates/tatee/images/slide-12.jpg" alt="Master Slider 01" />

                          <h4 className="tp-caption tp-resizeme rev-text-1" data-frames="[{&quot;delay&quot;:0,&quot;speed&quot;:1800,&quot;frame&quot;:&quot;0&quot;,&quot;from&quot;:&quot;y:[-100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;&quot;,&quot;mask&quot;:&quot;x:0px;y:0px;s:inherit;e:inherit;&quot;,&quot;to&quot;:&quot;o:1;&quot;,&quot;ease&quot;:&quot;Power3.easeInOut&quot;},{&quot;delay&quot;:&quot;wait&quot;,&quot;speed&quot;:800,&quot;frame&quot;:&quot;999&quot;,&quot;to&quot;:&quot;auto:auto;&quot;,&quot;ease&quot;:&quot;Power3.easeInOut&quot;}]"
                          data-x="['left']" data-y="['middle']" data-hoffset="[0, 0, 0, 0, 0]" data-voffset="[-118, -118, -70, -80, -80]" data-paddingleft="[0, 0, 0, 0, 15]" data-paddingright="[0, 0, 0, 0, 15]" data-width="['auto']" data-height="[&quot;auto&quot;]"
                          data-whitespace="[nowrap, nowrap, nowrap, nowrap, nowrap]" data-color="#fff" data-fontweight="400" data-fontsize="[11, 11, 18, 20, 20]" data-textalign="[left, left, left, center, center]">architecture</h4>
                          
                          <h2 className="tp-caption tp-resizeme rev-text-2" data-frames="[{&quot;delay&quot;:800,&quot;speed&quot;:2100,&quot;frame&quot;:&quot;0&quot;,&quot;from&quot;:&quot;x:[-100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;&quot;,&quot;mask&quot;:&quot;x:0px;y:0px;s:inherit;e:inherit;&quot;,&quot;to&quot;:&quot;o:1;&quot;,&quot;ease&quot;:&quot;Power3.easeInOut&quot;},{&quot;delay&quot;:&quot;wait&quot;,&quot;speed&quot;:800,&quot;frame&quot;:&quot;999&quot;,&quot;to&quot;:&quot;auto:auto;&quot;,&quot;ease&quot;:&quot;Power3.easeInOut&quot;}]"
                          data-x="[left]" data-y="[center]" data-hoffset="[0, 0, 0, 0, 0]" data-voffset="[-35, -30, 15, 10, 10]" data-paddingleft="[0, 0, 0, 0, 15]" data-paddingright="[0, 0, 0, 0, 15]" data-width="[600,600,500,576,500]" data-height="[&quot;auto&quot;]"
                          data-lineheight="[60, 60, 45, 50, 45]" data-whitespace="normal" data-color="#fff" data-fontweight="700" data-fontsize="[48, 48, 46, 42, 46]" data-textalign="[left, left, left, left, left]">Canadian lake house features dark wood</h2>
                          
                          <a className="tp-caption tp-resizeme" href="#" target="_self" data-frames="[{&quot;delay&quot;:0,&quot;speed&quot;:1800,&quot;frame&quot;:&quot;0&quot;,&quot;from&quot;:&quot;y:[100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;opacity:0;&quot;,&quot;mask&quot;:&quot;x:0px;y:[100%];s:inherit;e:inherit;&quot;,&quot;to&quot;:&quot;o:1;&quot;,&quot;ease&quot;:&quot;Power2.easeInOut&quot;},{&quot;delay&quot;:&quot;wait&quot;,&quot;speed&quot;:800,&quot;frame&quot;:&quot;999&quot;,&quot;to&quot;:&quot;auto:auto;&quot;,&quot;ease&quot;:&quot;Power3.easeInOut&quot;}]"
                          data-x="[left]" data-y="[center]" data-hoffset="[0, 0, 0, 0, 15]" data-voffset="[87, 87, 130, 130, 130]" data-width="['auto']" data-height="[&quot;auto&quot;]" data-responsive_offset="on" data-responsive="off" data-whitespace="[nowrap, nowrap, nowrap, nowrap, nowrap]">
                              <span className="rev-btn-1">See project
                                  <span className="arrow" data-paddingleft="5">
                                      <i className="zmdi zmdi-arrow-right"></i>
                                  </span>
                              </span>
                          </a>
                      </li>

                      <li className="rev-item rev-item-1" data-transition="papercut">
                        <img className="rev-slidebg" src="https://freebw.com/templates/tatee/images/slide-13.jpg" alt="Master Slider 01" />
                        <h4 className="tp-caption tp-resizeme rev-text-1" data-frames="[{&quot;delay&quot;:0,&quot;speed&quot;:1800,&quot;frame&quot;:&quot;0&quot;,&quot;from&quot;:&quot;y:[-100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;&quot;,&quot;mask&quot;:&quot;x:0px;y:0px;s:inherit;e:inherit;&quot;,&quot;to&quot;:&quot;o:1;&quot;,&quot;ease&quot;:&quot;Power3.easeInOut&quot;},{&quot;delay&quot;:&quot;wait&quot;,&quot;speed&quot;:800,&quot;frame&quot;:&quot;999&quot;,&quot;to&quot;:&quot;auto:auto;&quot;,&quot;ease&quot;:&quot;Power3.easeInOut&quot;}]"
                        data-x="['left']" data-y="['middle']" data-hoffset="[0, 0, 0, 0, 0]" data-voffset="[-118, -118, -70, -80, -80]" data-paddingleft="[0, 0, 0, 0, 15]" data-paddingright="[0, 0, 0, 0, 15]" data-width="['auto']" data-height="[&quot;auto&quot;]"
                        data-whitespace="[nowrap, nowrap, nowrap, nowrap, nowrap]" data-color="#fff" data-fontweight="400" data-fontsize="[11, 11, 18, 20, 20]" data-textalign="[left, left, left, center, center]">architecture</h4>
                        <h2 className="tp-caption tp-resizeme rev-text-2" data-frames="[{&quot;delay&quot;:800,&quot;speed&quot;:2100,&quot;frame&quot;:&quot;0&quot;,&quot;from&quot;:&quot;x:[-100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;&quot;,&quot;mask&quot;:&quot;x:0px;y:0px;s:inherit;e:inherit;&quot;,&quot;to&quot;:&quot;o:1;&quot;,&quot;ease&quot;:&quot;Power3.easeInOut&quot;},{&quot;delay&quot;:&quot;wait&quot;,&quot;speed&quot;:800,&quot;frame&quot;:&quot;999&quot;,&quot;to&quot;:&quot;auto:auto;&quot;,&quot;ease&quot;:&quot;Power3.easeInOut&quot;}]"
                        data-x="[left]" data-y="[center]" data-hoffset="[0, 0, 0, 0, 0]" data-voffset="[-35, -30, 15, 10, 10]" data-paddingleft="[0, 0, 0, 0, 15]" data-paddingright="[0, 0, 0, 0, 15]" data-width="[600,600,500,576,500]" data-height="[&quot;auto&quot;]"
                        data-lineheight="[60, 60, 45, 50, 45]" data-whitespace="normal" data-color="#fff" data-fontweight="700" data-fontsize="[48, 48, 46, 42, 46]" data-textalign="[left, left, left, left, left]">Future housein the Barvikha forest</h2>
                        <a className="tp-caption tp-resizeme" href="#" target="_self" data-frames="[{&quot;delay&quot;:0,&quot;speed&quot;:1800,&quot;frame&quot;:&quot;0&quot;,&quot;from&quot;:&quot;y:[100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;opacity:0;&quot;,&quot;mask&quot;:&quot;x:0px;y:[100%];s:inherit;e:inherit;&quot;,&quot;to&quot;:&quot;o:1;&quot;,&quot;ease&quot;:&quot;Power2.easeInOut&quot;},{&quot;delay&quot;:&quot;wait&quot;,&quot;speed&quot;:800,&quot;frame&quot;:&quot;999&quot;,&quot;to&quot;:&quot;auto:auto;&quot;,&quot;ease&quot;:&quot;Power3.easeInOut&quot;}]"
                        data-x="[left]" data-y="[center]" data-hoffset="[0, 0, 0, 0, 15]" data-voffset="[87, 87, 130, 130, 130]" data-width="['auto']" data-height="[&quot;auto&quot;]" data-responsive_offset="on" data-responsive="off" data-whitespace="[nowrap, nowrap, nowrap, nowrap, nowrap]">
                            <span className="rev-btn-1">See project
                                <span className="arrow" data-paddingleft="5">
                                    <i className="zmdi zmdi-arrow-right"></i>
                                </span>
                            </span>
                        </a>
                    </li>
                      
                  </ul>
              </div>
          </div>
          <div className="rev-spacer"></div>
      </section>
    )
}

export default SliderSection
  