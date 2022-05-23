import './App.css';

function App() {
  return (
    <div className="App">


      <nav id="nav" class="navbar navbar-expand-md">
        <a href="#/" id="bayc-brand" class="navbar-brand">
          <img src="https://ik.imagekit.io/bayc/assets/bayc-logo-z.png" class="d-inline-block align-top" alt="bored ape logo" height="75px" width="auto"></img>
        </a>
        <button aria-controls="responsive-navbar-nav" id="nav-toggle" type="button" aria-label="Toggle navigation" class="navbar-dark navbar-toggler collapsed"><span class="navbar-toggler-icon"></span></button>
        <div class="navbar-collapse collapse justify-content-end">
          <div class="navbar-nav" id="nav-bar">
            <a id="nav-link" title="BUY AN APE" href="#/home#buy-an-ape" class="nav-link">BUY AN APE</a>
            <a id="nav-link" title="ROADMAP" href="#/home#roadmap" class="nav-link">ROADMAP</a>
            <a id="nav-link" title="TEAM" href="#/home#team" class="nav-link">TEAM</a>
          </div>
        </div>
      </nav>


      <div class="mb-4 mb-lg-5 container"><div class="row"><div class="px-0 col-12"><img src="https://ik.imagekit.io/bayc/assets/bayc-mutant-hero.jpg" class="img-fluid px-0 py-0" usemap="#mutant"></img></div></div></div>


      <div className="px-4 mt-md-4 container">


        <div class="mb-5 row">
          <div class="col">
            <div class="mb-4 row">
              <div class="mb-4 col-lg-7 col-12">
                <h1 class="d-flex font-italic welcome-title mb-3">WELCOME TO THE<br></br>BORED APE YACHT CLUB</h1>
                <p class="common-p mb-0">BAYC is a collection of 10,000 Bored Ape NFTs—unique digital collectibles living on the Ethereum blockchain. Your Bored Ape doubles as your Yacht Club membership card, and grants access to members-only benefits, the first of which is access to THE BATHROOM, a collaborative graffiti board. Future areas and perks can be unlocked by the community through roadmap activation.</p>
              </div>
              <div class="my-lg-auto col-lg-4 col-12 offset-lg-1">
                <div class="common-container">
                  <div class="row">
                    <div class="pb-2 pr-2 col-6">
                      <img class="img-fluid" src="https://ik.imagekit.io/bayc/assets/ape1.png" alt="ape1" aria-label="ape1"></img>
                    </div>
                    <div class="pb-2 pl-2 col-6">
                      <img class="img-fluid" src="https://ik.imagekit.io/bayc/assets/ape2.png" alt="ape2" aria-label="ape2"></img>
                    </div>
                  </div>
                  <div class="row">
                    <div class="pt-2 pr-2 col-6">
                      <img class="img-fluid" src="https://ik.imagekit.io/bayc/assets/ape3.png" alt="ape3" aria-label="ape3"></img>
                    </div>
                    <div class="pt-2 pl-2 col-6">
                      <img class="img-fluid" src="https://ik.imagekit.io/bayc/assets/ape4.png" aria-label="ape4"></img>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="row">
              <div class="mb-3 col-12">
                <h3 class="fair-title">FAIR DISTRIBUTION</h3>
                <h4 class="ponzi">(BONDING CURVES ARE A PONZI)</h4>
              </div>
              <div class="mb-2 mb-lg-0 col-lg-7 col-12">
                <p class="common-p mb-lg-0">There are no bonding curves here. Buying a Bored Ape costs 0.08 ETH. There are no price tiers; BAYC membership costs the same for everyone.</p>
              </div>
              <div class="col-lg-4 col-12 offset-lg-1">
                <p class="note text-justify mb-0">Note: Thirty apes are being withheld from the sale. These will be used for giveaways, puzzle rewards—and for the creators' BAYC memberships.</p>
              </div>
            </div>
            
          </div>
        </div>





        <div class="mb-5">
          <div class="col yellow">
            <div id="buy-an-ape" class="buy-token-container">
              <div class="bayc-bg p-4 m-auto row yellow">
                <div class="m-auto col-lg-3 col-12 yellow">
                  <h3 class="buy-ape-title yellow" style={{color:'black'}}>BUY AN APE</h3>
                </div>
                <div class="m-auto col-lg-4 col-12 offset-lg-1 yellow">
                  <p class="common-p mb-lg-0 yellow" style={{color:'black'}}>The initial sale has sold out. To get your Bored Ape, check out the collection on OpenSea.</p>
                </div>
                <div class="m-auto col-lg-3 col-12 offset-lg-1 yellow text-center"><a href="https://opensea.io/collection/boredapeyachtclub"><button class="bayc-button mint" type="button">BUY AN APE ON OPENSEA</button></a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <hr class="gray-line mb-5"></hr>


        <div class="mb-5 row">
          <div class="col">
            <div class="common-container">
              <div class="row">
                <div class="mb-3 col-lg-7 col-12">
                  <h2 class="common-title mb-3">THE SPECS</h2>
                  <p class="common-p">Each Bored Ape is unique and programmatically generated from over 170 possible traits, including expression, headwear, clothing, and more. All apes are dope, but some are rarer than others.<br></br><br></br>The apes are stored as ERC-721 tokens on the Ethereum blockchain and hosted on IPFS. (<a class="link" href="#/provenance" style={{color:'#bfc500',textDecoration:'underline'}}>See Record and Proof.</a>) Purchasing an ape costs 0.08 ETH.<br></br><br></br>To access members-only areas such as&nbsp;<a class="link" href="#/bathroom" style={{color:'#bfc500',textDecoration:'underline'}}>THE BATHROOM</a>, Apeholders will need to be signed into their Metamask Wallet.</p>
                </div>
                <div class="my-auto col-lg-4 col-12 offset-lg-1">
                  <img class="img-fluid w-100" src="https://ik.imagekit.io/bayc/assets/mystery-ape.gif" alt="mystery token"></img>
                </div>
              </div>
            </div>
          </div>
        </div>



        <hr class="gray-line mb-5"></hr>


        <div class="mb-5">
          <div class="col">
            <div class="row">
              <div class="mb-3 col-lg-9 col-12">
                <h2 class="common-title mb-3">WELCOME TO THE CLUB</h2>
                <p class="common-p">When you buy a Bored Ape, you’re not simply buying an avatar or a provably-rare piece of art. You are gaining membership access to a club whose benefits and offerings will increase over time. Your Bored Ape can serve as your digital identity, and open digital doors for you.</p>
              </div>
            </div>
            <div class="row">
              <div class="mx-auto col-md-2 col-12">
                <div class="mb-4 mb-md-0 row">
                  <div class="d-flex m-auto align-items-md-center icon-container col-md-12 col-3">
                    <img class="img-fluid m-auto" src="https://ik.imagekit.io/bayc/assets/icon1.png" alt="petrified monkey paw" width="100px"></img>
                  </div>
                  <div class="m-auto col-md-12 col-8 offset-md-0 offset-1">
                    <p class="mb-0 common-sub-p text-md-center">10,000 Provably-rare Bored Ape tokens</p>
                  </div>
                </div>
              </div>
              <div class="mx-auto col-md-2 col-12">
                <div class="mb-4 mb-md-0 row">
                  <div class="d-flex m-auto align-items-md-center icon-container col-md-12 col-3">
                    <img class="img-fluid m-auto" src="https://ik.imagekit.io/bayc/assets/icon2.png" alt="tiki monkey" width="100px"></img>
                  </div>
                  <div class="m-auto col-md-12 col-8 offset-md-0 offset-1">
                    <p class="mb-0 common-sub-p text-md-center">Fair Launch, fair distribution: All apes cost 0.08 ETH</p>
                  </div>
                </div>
              </div>
              <div class="mx-auto col-md-2 col-12">
                <div class="mb-4 mb-md-0 row">
                  <div class="d-flex m-auto align-items-md-center icon-container col-md-12 col-3">
                    <img class="img-fluid m-auto" src="https://ik.imagekit.io/bayc/assets/icon3.png" alt="captain monkey" width="100px"></img>
                  </div>
                  <div class="m-auto col-md-12 col-8 offset-md-0 offset-1">
                    <p class="mb-0 common-sub-p text-md-center">Ownership and commercial usage rights given to the consumer over their NFT</p>
                  </div>
                </div>
              </div>
              <div class="mx-auto col-md-2 col-12">
                <div class="mb-4 mb-md-0 row">
                  <div class="d-flex m-auto align-items-md-center icon-container col-md-12 col-3">
                    <img class="img-fluid m-auto" src="https://ik.imagekit.io/bayc/assets/icon4.png" alt="beer bottles" width="100px"></img>
                  </div>
                  <div class="m-auto col-md-12 col-8 offset-md-0 offset-1">
                    <p class="mb-0 common-sub-p text-md-center">The Bathroom: A member's-only graffiti board</p>
                  </div>
                </div>
              </div>
              <div class="mx-auto col-md-2 col-12">
                <div class=" mb-md-0 row">
                  <div class="d-flex m-auto align-items-md-center icon-container col-md-12 col-3">
                    <img class="img-fluid m-auto" src="https://ik.imagekit.io/bayc/assets/icon5.png" alt="mermonkey" width="100px"></img>
                  </div>
                  <div class="m-auto col-md-12 col-8 offset-md-0 offset-1">
                    <p class="mb-0 common-sub-p text-md-center">Gain additional benefits through roadmap activations</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>



        <hr class="gray-line mb-5"></hr>




        <div class="mb-5">
          <div class="col">
            <div id="team" class="common-container">
              <div class="row">
                <div class="mb-3 col-lg-7 col-12">
                  <h2 class="common-title mb-3">THE TEAM</h2>
                  <p class="common-p">BAYC was created by four friends who set out to make some dope apes, test our skills, and try to build something (ridiculous).</p>
                  <p class="common-p">
                    <span class="bayc-color bold-text">GARGAMEL. </span> 
                    <span class="font-italic">STARCRAFT OBSESSED. EATS SMURFS.</span>
                  </p>
                  <p class="common-p">
                    <span class="bayc-color bold-text">GORDON GONER. </span> 
                    <span class="font-italic">REFORMED LEVERAGE ADDICT.</span>
                  </p>
                  <p class="common-p">
                    <span class="bayc-color bold-text">EMPEROR TOMATO KETCHUP. </span> 
                    <span class="font-italic">SPENT ALL THEIR MONEY ON FIRST PRESSES AND PET-NAT.
                  </span></p>
                  <p class="common-p">
                    <span class="bayc-color bold-text">NO SASS. </span> 
                    <span class="font-italic"> HERE FOR THE APES. NOT FOR THE SASS.</span>
                  </p>
                </div>
                <div class="col-lg-4 col-12 offset-lg-1">
                  <div class="common-container">
                    <div class="row">
                      <div class="pb-2 pr-2 col-6">
                        <img class="img-fluid" src="https://ik.imagekit.io/bayc/assets/garga.png" alt="garga" aria-label="garga"></img>
                      </div>
                      <div class="pb-2 pl-2 col-6">
                        <img class="img-fluid" src="https://ik.imagekit.io/bayc/assets/gordy.png" alt="gordy" aria-label="gordy"></img>
                      </div>
                    </div>
                    <div class="row">
                      <div class="pt-2 pr-2 col-6">
                        <img class="img-fluid" src="https://ik.imagekit.io/bayc/assets/tomato.png" alt="tomato" aria-label="tomato"></img>
                      </div>
                      <div class="pt-2 pl-2 col-6">
                        <img class="img-fluid" src="https://ik.imagekit.io/bayc/assets/sass.png" aria-label="sass"></img>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>



        <div class="mb-5 row">
          <div class="col">
            <div class="d-flex justify-content-center">
              <p class="common-p text-center text-break mb-0">
                <span class="bold-text">VERIFIED SMART CONTRACT ADDRESS: </span>
                <a title="0xBC4CA0EdA7647A8aB7C2061c2E118A18a936f13D" href="https://etherscan.io/address/0xBC4CA0EdA7647A8aB7C2061c2E118A18a936f13D" class="link" style={{color:'#bfc500',textDecoration:'underline'}}>0xBC4CA0EdA7647A8aB7C2061c2E118A18a936f13D</a>
              </p>
            </div>
          </div>
        </div>

        


      </div>

      <footer class="footer">
        <div class="container footer-line">
          <hr class="p-0 line"></hr>
          <div class="row mx-0 footer-padding justify-content-center">
            <div class="col-12 col-lg-4 text-center">
              <img class="img-fluid footer-logo" src="https://ik.imagekit.io/bayc/assets/bayc-footer.png" alt="logo"></img>
            </div>
          </div>
        </div>
        <div class="container-fluid m-0 p-0">
          <span class="last-line"></span>
        </div>
      </footer>

    </div>
  );
}

export default App;
