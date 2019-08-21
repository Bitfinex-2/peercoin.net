import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames';
import './Menu.scss';

function Menu() {
  const triggerHeight = 100;
  const [isFixed, setIsFixed] = useState(window.scrollY > triggerHeight);
  const [isOpen, setIsOpen] = useState(false);
  
  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > triggerHeight) {
        setIsFixed(true);
      } else {
        setIsFixed(false);
      }
    });

    if (window.scrollY > triggerHeight) {
      setIsFixed(true);
    } else {
      setIsFixed(false);
    }
  }, []);

  async function toggleMenu() {
    await setIsOpen(!isOpen);
  }
  
  function menuClass() {
    return classNames({
      'menu': true,
      'menu--fixed': isFixed,
      'menu--open': isOpen
    });
  }

  return (
    <>
      <div className="menu-trigger" onClick={toggleMenu}>
        <img src="/img/menu.png" alt=""/>
      </div>
      <nav className={menuClass()}>
        <div className="menu__close" onClick={toggleMenu}>
          <img src="/img/back.png" alt=""/>
        </div>
        <div className="container">
          {isFixed && <img src="/img/logo-menu-white.svg" alt="Peercoin" className="menu__logo" />}
          <ul className="menu__main">
            <li><Link to="/">Home</Link></li>
            <li>
              <span>Learn</span>
              <img src="/img/icon-menu-arrow-down.svg" alt=""/>
              <ul className="menu__main__submenu">      
                <li><a href="https://peercoin.github.io/PeercoinUniversity/" className="submenu">Peercoin University</a></li>
                <li><a href="https://peercoin.github.io/PeercoinUniversity/#/2-what-is-a-blockchain-" className="submenu">What is a Blockchain?</a></li>
                <li><a href="https://peercoin.github.io/PeercoinUniversity/#/6-centralization-of-bitcoin" className="submenu">Inherent Centralization of Proof-of-Work Blockchains</a></li>
                <li><a href="https://peercoin.github.io/PeercoinUniversity/#/9-peercoin-proof-of-stake-consensus" className="submenu">Peercoin &amp; Proof-of-Stake Consensus</a></li>
                <li><a href="https://peercoin.github.io/PeercoinUniversity/#/10-first-efficient-sustainable-blockchain" className="submenu">Efficient &amp; Sustainable Security</a></li>
                <li><a href="https://peercoin.github.io/PeercoinUniversity/#/11-economics-of-peercoin" className="submenu">Economics of Peercoin</a></li>
                <li><a href="https://peercoin.github.io/PeercoinUniversity/#/12-scalability-of-peercoin-" className="submenu">Scalability of Peercoin</a></li>
                <li><a href="https://medium.com/peercoin/deflation-and-cryptocurrencies-the-long-term-ramifications-of-fixed-supply-currencies-c192f44dddc1" className="submenu">Deflation and Cryptocurrencies</a></li>
                <li><a href="https://medium.com/peercoin/peercoins-hybrid-chain-solution-to-proof-of-work-global-scaling-and-environmental-impact-c36757e89d6e" className="submenu">Peercoin's Hybrid Chain Solution</a></li>
                <li><a href="https://medium.com/peercoin/the-rich-get-richer-concept-in-proof-of-stake-systems-82c5ceeff326" className="submenu">"Rich get Richer" Fallacy</a></li>
                <li><a href="https://docs.peercoin.net/#/frequently-asked-questions" className="submenu">Frequently Asked Questions</a></li>
              </ul>
            </li>
            <li><a href="/#getstarted">Get Started</a></li>
            <li>
              <Link to="/resources">Resources</Link>
              <img src="/img/icon-menu-arrow-down.svg" alt=""/>
              <ul className="menu__main__submenu">
                <li><a href="https://docs.peercoin.net/" className="submenu"><img src="/img/icons/docs_green.png" alt="" />Documentation</a></li>
                <li><a href="/resources#mining" className="submenu"><img src="/img/icons/pickaxe_green.png" alt="" />Mining</a></li>
                <li><a href="/resources#university" className="submenu"><img src="/img/icons/graduationcap.png" alt="" />Peercoin University</a></li>
                <li><a href="/resources#exchanges" className="submenu"><img src="/img/icons/exchange_green.png" alt="" />Exchanges</a></li>
                <li><a href="/resources#blockexplorers" className="submenu"><img src="/img/icons/block_green.png" alt="" />Block Explorers</a></li>
                <li><a href="/resources#whitepaper" className="submenu"><img src="/img/icons/whitepaper_green.png" alt="" />Whitepaper</a></li>
                <li><a href="/resources#graphics" className="submenu"><img src="/img/icons/graphics_green.png" alt="" />Graphics</a></li>
              </ul>
            </li>
            <li>
              <span>Project</span>
              <img src="/img/icon-menu-arrow-down.svg" alt=""/>
              <ul className="menu__main__submenu">
                <li><a href="https://github.com/peercoin/" className="submenu"><img src="/img/icons/github_green.png" alt="" />GitHub</a></li>
                <li><Link to="/projects" className="submenu"><img src="/img/icons/projects_green.png" alt="" />Projects</Link></li>
                <li><Link to="https://medium.com/peercoin" className="submenu"><img src="/img/icons/blog_green.png" alt="" />Blog</Link></li>
                <li><Link to="/foundation" className="submenu"><img src="/img/icons/foundation_green.png" alt="" />Peercoin Foundation</Link></li>
                <li><Link to="/contact" className="submenu"><img src="/img/icons/contact_green.png" alt="" />Contact Us</Link></li>
              </ul>
            </li>
            <li><Link to="/wallet">Wallet</Link></li>
            <li>
              <span>Community</span>
              <img src="/img/icon-menu-arrow-down.svg" alt=""/>
              <ul className="menu__main__submenu">
                <li><a href="https://talk.peercoin.net/" className="submenu"><img src="/img/icons/forum_green.png" alt="" />Forum</a></li>
                <li><a href="https://twitter.com/PeercoinPPC" className="submenu"><img src="/img/icons/twitter_green.png" alt="" />Twitter</a></li>
                <li><a href="https://www.facebook.com/Peercoin/" className="submenu"><img src="/img/icons/facebook_green.png" alt="" />Facebook</a></li>
                <li><a href="https://www.reddit.com/r/peercoin" className="submenu"><img src="/img/icons/reddit_green.png" alt="" />Reddit</a></li>
                <li><a href="https://t.me/peercoin" className="submenu"><img src="/img/icons/telegram_green.png" alt="" />Telegram</a></li>
                <li><a href="https://discord.gg/XPxfwtG" className="submenu"><img src="/img/icons/discord_green.png" alt="" />Discord</a></li>
                <li><a href="https://www.youtube.com/user/PeerCoin" className="submenu"><img src="/img/icons/youtube_green.png" alt="" />Youtube</a></li>
                <li><a href="https://bitcointalk.org/index.php?topic=101820.0" className="submenu"><img src="/img/icons/bitcoinchat_green.png" alt="" />Bitcointalk</a></li>
              </ul>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Menu;