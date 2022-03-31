import React from 'react'
import './Footer.css'
import { FooterData } from './Data'


import PaymentBar from './PaymentBar'

const Footer = () => {
  return (
    <>
      <PaymentBar />
        <div className="footer-bg">
          <div className="footer-container">
            {FooterData.map((item) =>
              Object.keys(item).map((itemKey) => (
                <>
                  <div class="ftr-itms">
                    <span className="ftr-itm-hll">{itemKey}</span>

                    {Object.keys(item[itemKey]).map((secItemKey) => {
                      let obj = item[itemKey][secItemKey];
                      return (
                        <>
                          {typeof obj !== "object" ? (
                            <span className="ftr-itm">{obj}</span>
                          ) : (
                            <>
                              {Object.keys(obj).map((thItemKey) => (
                                <>
                                  <span className="ftr-itm">
                                    {obj[thItemKey]}
                                  </span>
                                </>
                              ))}
                            </>
                          )}
                        </>
                      );
                    })}
                  </div>
                </>
              ))
            )}
          </div>
        </div>
    </>
  )
}

export default Footer