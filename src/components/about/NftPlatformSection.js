import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import { Table, Tag, Space } from 'antd';
import dev1 from '../../assets/images/team/dev1.png';
import dev2 from '../../assets/images/team/dev2.png';
import dev4 from '../../assets/images/team/dev4.png';
import dev5 from '../../assets/images/team/dev5.png';
import dev6 from '../../assets/images/team/dev6.png';
import dev7 from '../../assets/images/team/dev7.png';
import dev8 from '../../assets/images/team/dev8.png';
import dev9 from '../../assets/images/team/dev9.png';
import dev10 from '../../assets/images/team/dev10.png';
import { Collapse } from 'antd';
const { Panel } = Collapse;
const columns = [
  {
    title: 'Sales Rounds',
    dataIndex: 'Sales',
    key: 'Sales',
    render: text => <a>{text}</a>,
  },
  {
    title: 'Price $PS/ADA',
    dataIndex: 'Price',
    key: 'Price',
  },
  {
    title: 'Allocations',
    dataIndex: 'Allocations',
    key: 'Allocations',
  },
  {
    title: 'USD Rate',
    dataIndex: 'USD',
    key: 'USD',
  }
];
const data = [
  {
    key: '1',
    Sales: 'Pre-sale',
    Price: '0.017 ADA',
    Allocations: '17%',
    USD: '0.019306'
  },
  {
    key: '2',
    Sales: 'Private sale',
    Price: '0.027 ADA',
    Allocations: '5%',
    USD: '0.030662'
  },
  {
    key: '3',
    Sales: 'Public sale',
    Price: '0.037 ADA',
    Allocations: '3%',
    USD: '0.042019'
  },
  {
    key: '4',
    Sales: 'Total',
    Price: '',
    Allocations: '25%',
    USD: ''
  },
  
];

const NftPlatformSection = () => {
  return (
    <>
    <Box id="JSNft" 
      sx={{
        py: 7, 
        borderBottom: 1, 
        borderColor: "grey.100",
      }}
    >
      <Container>
        <Typography 
          variant="h4" 
          component="div" 
          color = "block"
          sx={{ fontWeight: 'bold', mb: 2 }}
        >
          NFT Platform
        </Typography>
        <Typography 
          variant="body1" 
          color = "block" 
          sx={{ mb: 1,  }}
        >
          Alongside our decentralized exchange, Individuals can have access to our PS NFT platform. This gives the chance to showcase their digital art and also gives lovers of art to own their NFT from our platform.
        </Typography>
      </Container>
    </Box>
    <Box id="Career" 
      sx={{
        py: 7, 
        borderBottom: 1, 
        borderColor: "grey.100",
      }}
    >
      <Container>
        <Typography 
          variant="h3" 
          component="div" 
          color = "block"
          sx={{ fontWeight: 'bold',color: '#1a90ff', mb: 2 ,textAlign: 'center'}}
        >
         Careers
        </Typography>
        <br />
        <Typography 
          variant="h4" 
          component="div" 
          color = "block"
          sx={{ fontWeight: 'bold', mb: 2 }}
        >
          Working at Poppyswap.finance
        </Typography>
        <Typography 
          variant="body1" 
          color = "block" 
          sx={{ mb: 1,  }}
        >
          At Poppyswap.finance, we are always looking for talented individuals. We take our work seriously, pursuing excellence relentlessly, and enjoy working together on difficult tasks. Poppyswap.finance offers a variety of career opportunities, including the following:
        </Typography>
        <br />
        <Typography 
          variant="h4" 
          component="div" 
          color = "block"
          sx={{ fontWeight: 'bold', mb: 2 }}
        >
          Blockchain Developers
        </Typography>
        <Typography 
          variant="body1" 
          color = "block" 
          sx={{ mb: 1,  }}
        >
          Blockchain developers who are capable of assisting businesses in their exploration of Blockchain platforms are in high demand. Today, blockchain development may be the most marketable career path, as people are eager to reap the benefits of the technology. Due to the importance of their position, these individuals must pay close attention to detail. Developers of blockchain technology are programmers who create blockchain applications. Prior to becoming Blockchain developers, they typically have extensive experience with C++, Python, and JavaScript.
        </Typography>
        <br />
        <Typography 
          variant="h4" 
          component="div" 
          color = "block"
          sx={{ fontWeight: 'bold', mb: 2 }}
        >
          Blockchain Solution Architect
        </Typography>
        <Typography 
          variant="body1" 
          color = "block" 
          sx={{ mb: 1,  }}
        >
          The Blockchain Solution Architect is responsible for designing, assigning, and connecting Blockchain solution components to team experts such as developers, network administrators, user experience designers, and IT operations.
        </Typography>
        <br />
        <Typography 
          variant="h4" 
          component="div" 
          color = "block"
          sx={{ fontWeight: 'bold', mb: 2 }}
        >
          Blockchain Project Manager
        </Typography>
        <Typography 
          variant="body1" 
          color = "block" 
          sx={{ mb: 1,  }}
        >
          This individual is tasked with connecting Blockchain projects to experts tasked with developing Blockchain solutions. Blockchain project managers must possess the same skills as traditional project managers (cloud). Additionally, they must master the technical aspects of technology in order to fully comprehend it. Another critical ability is superior communication; this is critical when communicating with non-technical employees, providing useful updates, or attempting to obtain resources from higher authorities.
        </Typography>
        <br />
        <Typography 
          variant="h4" 
          component="div" 
          color = "block"
          sx={{ fontWeight: 'bold', mb: 2 }}
        >
          Blockchain UX/UI Designer
        </Typography>
        <Typography 
          variant="body1" 
          color = "block" 
          sx={{ mb: 1,  }}
        >
          With the widespread adoption of Blockchain technology across numerous industries, the design and user interface of the technology have become critical. A Blockchain designer's role is to shape an intuitive user interface that fosters trust and appeals to the average user. These individuals must be detail-oriented, artistic, and above all, diligent, as their line of work requires them to spend countless hours behind their computers.
        </Typography>
        <br />
        <Typography 
          variant="h4" 
          component="div" 
          color = "block"
          sx={{ fontWeight: 'bold', mb: 2 }}
        >
          Blockchain Quality Engineer
        </Typography>
        <Typography 
          variant="body1" 
          color = "block" 
          sx={{ mb: 1,  }}
        >
          In every development environment, we have a quality assurance engineer who tests and verifies that all aspects of the project meet the required standards of quality. A Blockchain engineer fulfils a similar role in the Blockchain world by ensuring that all operations in the Blockchain development environment are of the highest quality. That is, they test and automate Blockchain frameworks. These individuals must have a third eye when it comes to attention to detail, as even a minor error on their part has an effect on everyone who uses their technology. Additionally, strong communication skills contribute significantly to the maintenance of positive work relationships.
        </Typography>
        <br />
        <Typography 
          variant="h4" 
          component="div" 
          color = "block"
          sx={{ fontWeight: 'bold', mb: 2 }}
        >
          Blockchain Legal Advisor
        </Typography>
        <Typography 
          variant="body1" 
          color = "block" 
          sx={{ mb: 1,  }}
        >
          Notably, as organizations attempt to integrate Blockchain technology into their systems, legal issues inevitably arise. As businesses implement this new technology, they seek legal counsel on investment considerations. They are inquisitive about the consequences of their actions, the management of their finances, and finally, the management of their identity. Naturally, such a person must possess effective communication skills. Additionally, you must be familiar with international law, as Blockchain is a technology that transcends borders. For this reason, it is recommended that such individuals master as many universal languages as possible.
        </Typography>
        <br />
        <Typography 
          variant="h4" 
          component="div" 
          color = "block"
          sx={{ fontWeight: 'bold', mb: 2 }}
        >
          Other related career paths in Poppyswap.finance include;
        </Typography>
        <Typography 
          variant="body1" 
          color = "block" 
          sx={{ mb: 1,  }}
        >
          Accountants, Public relations professionals, Marketers, Cryptocurrency journalists, Managers, Cryptocurrency brokers, Analysts, and Initial coin offering (ICO) advisors.
        </Typography>
        <br />
        <Typography 
          variant="h4" 
          component="div" 
          color = "block"
          sx={{ fontWeight: 'bold', mb: 2 }}
        >
          The advantages of working with us includes but not limited to the following:
        </Typography>
        <Typography 
          variant="body1" 
          color = "block" 
          sx={{ mb: 1,  }}
        >
          Salary Arrangements<br />
          Competitive Contracts That Are Fair<br />
          Crypto Bonus<br />
          Vacation Continuum<br />
          Remote-working<br />
          Flexible work that is adaptable<br />

        </Typography>
        <br />
        <Typography 
          variant="h4" 
          component="div" 
          color = "block"
          sx={{ fontWeight: 'bold', mb: 2 }}
        >
          Vacancies
        </Typography>
        <Typography 
          variant="body1" 
          color = "block" 
          sx={{ mb: 1,  }}
        >
          When we begin hiring, we will advertise all available positions on our Career page. Visit our Careers page for the most up-to-date information on available positions. 
          <br/ >
          If you are passionate about making a difference and are interested in working with Poppyswap.finance, we want to hear from you.
        </Typography>
        <br />
        <Typography 
          variant="h4" 
          component="div" 
          color = "block"
          sx={{ fontWeight: 'bold', mb: 2 }}
        >
          The Application Process
        </Typography>
        <Typography 
          variant="body1" 
          color = "block" 
          sx={{ mb: 1,  }}
        >
          For inquiries about a position, please send an email to careers@poppyswap.finance with the position you are interested in applying for as the subject line.
        </Typography>
      </Container>
    </Box>
    <Box id="Team" 
      sx={{
        py: 7, 
        borderBottom: 1, 
        borderColor: "grey.100",
      }}
    >
      <Container>
        <Typography 
          variant="h3" 
          component="div" 
          color = "block"
          sx={{ fontWeight: 'bold',color: '#1a90ff', mb: 2 ,textAlign: 'center'}}
        >
         Meet our team!

        </Typography>
        <br />
        <Grid container spacing={4} justifyContent="center">
            <Grid item xs={12} md={3} >
                <Box>
                  <img
                    src={dev4}
                    id="devimage"
                    alt="cubes"
                  />
                  <Typography
                    variant="body" 
                    component="div"
                    color="text.primary"
                    sx={{fontWeight: 700, fontSize: '1.275rem', textAlign: "center", marginTop: '20px'}}
                  >
                  Ruskin F
                  </Typography>
                  <Typography  variant="caption" color="text.secondary" sx={{fontSize: '0.875rem',textAlign: "center"}}>
                    <p id="jobtitle">Product Manager + Blockchain ,<br /> Cryptocurrency CFO + Qualified <br /> ACMA (CIMA UK) & CGMA (AICPA US)</p>
                  </Typography>
                </Box>
            </Grid>
            <Grid item xs={12} md={3} >

                <Box>
                  <img
                    src={dev5}
                    id="devimage"
                    alt="cubes"
                  />
                  <Typography
                    variant="body" 
                    component="div"
                    color="text.primary"
                    sx={{fontWeight: 700, fontSize: '1.275rem', textAlign: "center", marginTop: '20px'}}
                  >
                  Carey J
                  </Typography>
                  <Typography variant="caption" color="text.secondary" sx={{fontSize: '0.875rem',textAlign: "center"}}>
                  <p id="jobtitle">Art Director + Creative Strategist<br />+ Creative Visual Art Director </p>
                  </Typography>
                </Box>

            </Grid>
            <Grid item xs={12} md={3} >
                <Box>
                  <img
                    src={dev2}
                    id="devimage"
                    width="220"
                    height="220"
                    alt="cubes"
                  />
                  <Typography
                    variant="body" 
                    component="div"
                    color="text.primary"
                    sx={{fontWeight: 700, fontSize: '1.275rem', textAlign: "center", marginTop: '20px'}}
                  >
                  Alex C
                  </Typography>
                  <Typography variant="caption" color="text.secondary" sx={{fontSize: '0.875rem',textAlign: "center"}}>
                  <p id="jobtitle">Crypto Developer</p>
                  </Typography>
                </Box>
            </Grid>
            <Grid item xs={12} md={3} >
                <Box>
                  <img
                    src={dev6}
                    id="devimage"
                    width="220"
                    height="220"
                    alt="cubes"
                  />
                  <Typography
                    variant="body" 
                    component="div"
                    color="text.primary"
                    sx={{fontWeight: 700, fontSize: '1.275rem', textAlign: "center", marginTop: '20px'}}
                  >
                  Vince C
                  </Typography>
                  <Typography variant="caption" color="text.secondary" sx={{fontSize: '0.875rem',textAlign: "center"}}>
                  <p id="jobtitle">Executive Creative Director + <br /> Emmy Nominated Art Director </p>
                  </Typography>
                </Box>
            </Grid>
            <Grid item xs={12} md={3} >
                <Box>
                  <img
                    src={dev7}
                    id="devimage"
                    width="220"
                    height="220"
                    alt="cubes"
                  />
                  <Typography
                    variant="body" 
                    component="div"
                    color="text.primary"
                    sx={{fontWeight: 700, fontSize: '1.275rem', textAlign: "center", marginTop: '20px'}}
                  >
                  Serg D 
                  </Typography>
                  <Typography variant="caption" color="text.secondary" sx={{fontSize: '0.875rem',textAlign: "center"}}>
                  <p id="jobtitle">Graphic Design Expert </p>
                  </Typography>
                </Box>
            </Grid>
            <Grid item xs={12} md={3} >
                <Box>
                  <img
                    src={dev8}
                    id="devimage"
                    width="220"
                    height="220"
                    alt="cubes"
                  />
                  <Typography
                    variant="body" 
                    component="div"
                    color="text.primary"
                    sx={{fontWeight: 700, fontSize: '1.275rem', textAlign: "center", marginTop: '20px'}}
                  >
                  Andik R 
                  </Typography>
                  <Typography variant="caption" color="text.secondary" sx={{fontSize: '0.875rem',textAlign: "center"}}>
                  <p id="jobtitle">Product Analyst + <br />Project Coordinator</p>
                  </Typography>
                </Box>
            </Grid>
            <Grid item xs={12} md={3} >
                <Box>
                  <img
                    src={dev9}
                    id="devimage"
                    width="220"
                    height="220"
                    alt="cubes"
                  />
                  <Typography
                    variant="body" 
                    component="div"
                    color="text.primary"
                    sx={{fontWeight: 700, fontSize: '1.275rem', textAlign: "center", marginTop: '20px'}}
                  >
                  Diego N
                  </Typography>
                  <Typography variant="caption" color="text.secondary" sx={{fontSize: '0.875rem',textAlign: "center"}}>
                  <p id="jobtitle">Graphic designer Specialist +  <br />Creative and Art Director</p>
                  </Typography>
                </Box>
            </Grid>
            <Grid item xs={12} md={3} >
                <Box>
                  <img
                    src={dev1}
                    id="devimage"
                    width="220"
                    height="220"
                    alt="cubes"
                  />
                  <Typography
                    variant="body" 
                    component="div"
                    color="text.primary"
                    sx={{fontWeight: 700, fontSize: '1.275rem', textAlign: "center", marginTop: '20px'}}
                  >
                  Mihail B 
                  </Typography>
                  <Typography variant="caption" color="text.secondary" sx={{fontSize: '0.875rem',textAlign: "center"}}>
                  <p id="jobtitle">Full Stack Blockchain Developer <br /> + Web & Blockchain</p>
                  </Typography>
                </Box>
            </Grid>
            <Grid item xs={12} md={3} >
                <Box>
                  <img
                    src={dev10}
                    id="devimage"
                    width="220"
                    height="220"
                    alt="cubes"
                  />
                  <Typography
                    variant="body" 
                    component="div"
                    color="text.primary"
                    sx={{fontWeight: 700, fontSize: '1.275rem', textAlign: "center", marginTop: '20px'}}
                  >
                  Mykhailo A  
                  </Typography>
                  <Typography variant="caption" color="text.secondary" sx={{fontSize: '0.875rem',textAlign: "center"}}>
                  <p id="jobtitle">Software Java engineer</p>
                  </Typography>
                </Box>
            </Grid>
        </Grid>
      </Container>
    </Box>
    <Box id="FAQ" 
      sx={{
        py: 7, 
        borderBottom: 1, 
        borderColor: "grey.100",
      }}
    >
      <Container>
        <Typography 
          variant="h3" 
          component="div" 
          color = "block"
          sx={{ fontWeight: 'bold',color: '#1a90ff', mb: 2 ,textAlign: 'center'}}
        >
        Frequently Asked Questions (FAQ’s)
        </Typography>
        <br />
        <Collapse bordered={false} defaultActiveKey={['1']} >
          <Panel id="faqtext" header="Q1. What is the aim and objectives of the PS platform?" key="1">
            A1. The end goal of the PS platform is to create a non-custodial decentralized exchange that would include liquidity providing, yield farming, staking, launching IDO and NFT, along with lending and borrowing.
          </Panel>
          <Panel id="faqtext" header="Q2. What is the official website of PS platform?" key="2">
            A2. Our official website is https://poppyswap.finance.
          </Panel>
          <Panel id="faqtext" header="Q3. What is the name of POPPYSWAP token?" key="3">
            A3. The name of POPPYSWAP token is PS BEAGLE. The token tracker id is $PS.
          </Panel>
          <Panel id="faqtext" header="Q4. What is the total supply of PS BEAGLE token?" key="4">
            A4. In total there will be 500 Million $PS tokens minted.
          </Panel>
          <Panel id="faqtext" header="Q5. Does POPPYSWAP has a Whitepaper?" key="5">
            A5. Yes. You can follow the link here to access the latest version of PS whitepaper.
          </Panel>
          <Panel id="faqtext" header="Q6. When will the POPPYSWAP IDO launch?" key="6">
            A6. The PS IDO would be launched after the release of our IDO platform.
          </Panel>
          <Panel id="faqtext" header="Q7. What is the staking reward the PS platform will give the users?" key="7">
            A7. Excellent! The users will be rewarded with PS Tokens.
          </Panel>
          <Panel id="faqtext" header="Q8: What model will the two Staking pool be like when it is launched? " key="8">
          A8: It will be similar to a Decentralized Autonomous Organization (DAO), which is a blockchain-based organization. In this case, the DAO will be programmed by smart contracts that are stored on the Cardano blockchain, wherein members interact with each other around a "self-enforcing open-source protocol," often tied to the DAO’s native cryptocurrency (PS tokens).
          The major benefits of the DAO model include:
          -	Increasing transparency over the organization’s rules, for example, bylaws,
          -	Increasing transparency over membership and actions to stakeholders,
          -	Stronger security through blockchain and smart contracts for on-chain digital asset management,
          -	All the while having a high level of formalization (that is, rules and requiring them to be followed) through the open-source protocol.
          Members will be incentivized to contribute to the growth of the DAO by receiving cryptocurrency (PS tokens) for completing tasks on the DAO’s behalf. Thus, the DAO model will allow for the Cardano blockchain’s benefit of trust minimization for the PS Staking platform, such that DAO members can rely on lower levels of trust than in a traditional organization before working together. This will generally operate in a non-hierarchical, horizontal governance manner, similar to cooperatives, which could be best described as quasi-cooperatives, wherein governance tokens will be used for decision-making processes.
          </Panel>
          <Panel id="faqtext" header="Q9.  What will the POPPYSWAP platform Staking pool be like?" key="9">
           A9: There will be the launch of 2 staking pools in due time. They will be similar to DAO a decentralized autonomous organization.
          </Panel>
          <Panel id="faqtext" header="Q10. Will there be Airdrops on POPPYSWAP platform?" key="10">
            A10. Yes! Some NFTs will be automatically minted and airdropped randomly. 
          </Panel>
          <Panel id="faqtext" header="Q11. Is PS BEAGLE token listed on Coinmarketcap?" key="11">
            A11. No, it is not yet available on Coinmarketcap. We would provide a link here to give more information about the token here as soon as our site is launched and listed on it.
          </Panel>
          <Panel id="faqtext" header="Q12. What is the current price of $PS?" key="12">
            A12. Brilliant! The PS token sale pricing will be maintained throughout the duration of the IDO, and the total number of tokens available for all the sales rounds will be equal to 25% of 500.000.000 tokens, which sums up to 125.000.000 PS tokens.
            <br />
            The $PS Sales Rounds will be conducted accordingly. 
            <Table columns={columns} dataSource={data} />
          </Panel>
          <Panel id="faqtext" header="Q13. How do I buy $PS?" key="13">
            13. You can currently acquire $PS by participating in the POPPYSWAP sales rounds. Each round would have its own page. For presale, you just have to click on the Pre-sale page link and follow the procedure. To buy $PS, you send $ADA to presale wallets through any of the Cardano supported wallets, such as Yoroi, Daedalus, Adalite, or Nami wallets, etc.
          </Panel>
          <Panel id="faqtext" header="Q14: I was contacted by the POPPYSWAP admin. Is this legit?" key="14">
            A14. For the safety of all our users, kindly note that the admins of POPPYSWAP would never reach out to you first. If anyone contacts you claiming to be from the POPPYSWAP admin, just know that they are likely to be an impersonator or a scammer. If you encounter an impersonator or scammer, do not hesitate to report and block the person with immediate effect. If it happens to be in the Telegram group, please report it as a security incident to an admin by posting the @handle on the main chat.
          </Panel>
        </Collapse>
      </Container>
    </Box>
    </>
  );
}
 
export default NftPlatformSection;
