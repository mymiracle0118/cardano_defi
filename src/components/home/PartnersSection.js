import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
// import certik from "../../assets/images/partners/certik.svg";
import polynetwork from "../../assets/images/partners/polygon-matic-logo.svg";
import highperformance from "../../assets/images/partners/high-performance-blockchain-logo-svg-vector.svg";
// import oneInch from "../../assets/images/partners/1inch.svg";
import flowflowlogo from "../../assets/images/partners/flow-flow-logo.svg";
import titaniumblockchain from "../../assets/images/partners/titanium-blockchain.svg";
import fantom from "../../assets/images/partners/fantom-ftm-logo.svg";
import chainlink from "../../assets/images/partners/chainlink-link-logo.svg";
import cardano from "../../assets/images/partners/cardano(2).png";

const partners = [
  // {label: "polynetwork", src: polynetwork, href: "https://bridge.poly.network/token/JS"},
  {label: "cardano", src: cardano, href: "https://cardano.org/", width: 150, height: 110},
  // {label: "highperformance", src: highperformance, href: "https://www.hpb.io/"},
  // {label: "flowflowlogo", src: flowflowlogo, href: "https://www.onflow.org/"},
  // {label: "fantom", src: fantom, href: "https://www.https://fantom.foundation/.com", width: 150},
  // {label: "titaniumblockchain", src: titaniumblockchain, href: "https://titanium-tech.net/", width: 130},
  // {label: "1inch", src: oneInch, href: "https://1inch.exchange/#/", width: 100},
  // {label: "chainlink", src: chainlink, href: "https://chain.link/", width: 130, height: 100},
  // {label: "bscscan", src: "/partners/bscscan.svg", href: "#"},
  // {label: "coingecko", src: "/partners/coingecko.svg", href: "#"},
]

const PartnersSection = () => {
  return (
    <Container sx={{pb: 5, mb: 5}} className="fadeInUp">
      <Grid 
        container 
        rowSpacing={4} 
        columnSpacing={2} 
        alignItems="center" 
        justifyContent="center"
      >
        {partners.map((partner, i) => (
          <Grid item xs={6} sm={4} md={2} key={i} sx={{textAlign: 'center'}}>
            <a
              href={partner.href}
              target="_blank" 
              rel="noreferrer" 
              style={{filter: 'grayscale(100%)'}}
            >
              <img 
                src={partner.src}
                alt={partner.label}
                width={partner.width || 160}
              />
            </a>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
 
export default PartnersSection;