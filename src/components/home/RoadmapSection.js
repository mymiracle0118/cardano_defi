import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import TimelineDot from '@mui/lab/TimelineDot';

const phaseI = [
  {text: "Idea conceptualization and planning", done: true},
  {text: "Whitepaper creation and release", done: true},
  {text: "Full-stage launch of the website", done: true},
  {text: "Social media platforms setup", done: true},
  {text: "First media awareness and press release", done: true},
  {text: "$PS token deployment on the Cardano blockchain", done: true},
  {text: "Smart contract development", done: true},
]

const phaseII = [
  {text: "Basic/minimal-scale marketing and brand awareness", done: false},
  {text: "$PS token presale round", done: false},
  {text: "$PS token private sale", done: false},
  {text: "Deployment of the PS NFT testnet", done: false},
  {text: "Stage 2 of marketing", done: false},
  {text: "$PS token public sale", done: false},
  {text: "Official launch of the PS NFT platform", done: false},
  {text: "Listing on CMC/Coingecko", done: false},
]

const phaseIII = [
  {text: "CMC NFT airdrop", done: false},
  {text: "Launch of 2 staking pools", done: false},
  {text: "Stage 3: large marketing", done: false},
  {text: "Coin listing on CEX", done: false},
  {text: "PS DEX Beta launch", done: false},
]

const phaseIV = [
  {text: "PS DEX live", done: false},
  {text: "PS DEX Lend & Borrow model", done: false},
  {text: "PS DEX launch on Cardano blockchain", done: false},
]

const phaseV = [
  {text: "PS DEX Burn & Repurchase", done: false},
  {text: "Community Growth", done: false},
]

const phases = [
  {name: "Q1 2022", phase: phaseI, done: true},
  {name: "Q2 2022", phase: phaseII, done: false},
  {name: "Q3 2022", phase: phaseIII, done: false},
  {name: "Q4 2022", phase: phaseIV, done: false},
  {name: "Q1 2023", phase: phaseV, done: false},
]

const RoadmapItemsRight = ({items}) => {
  return (
    <Timeline>
      {items.map((item, i) => (
        <TimelineItem key={i}>
          <TimelineOppositeContent sx={{ display: 'none' }} />
          <TimelineSeparator>
            <TimelineConnector sx={{bgcolor: 'blue'}} />
            <TimelineDot 
              variant={item.done ? 'filled' : 'outlined'} 
              sx={{boxShadow: 'none'}}
            ></TimelineDot>
            <TimelineConnector sx={{bgcolor: 'blue'}} />
          </TimelineSeparator>
          <TimelineContent sx={{ m: 'auto 0' }}>
            <Typography variant="h6" component="span"  sx={{mb: 0}}>
              {item.text}
            </Typography>
          </TimelineContent>
        </TimelineItem>
      ))}
    </Timeline>
  )
}

const RoadmapItemsLeft = ({items}) => {
  return (
    <Timeline>
      {items.map((item, i) => (
        <TimelineItem key={i}>
          <TimelineOppositeContent sx={{ display: 'none' }} />
          <TimelineContent sx={{ m: 'auto 0' }}>
            <Typography   variant="h6" component="span" sx={{mb: 0}}>
              {item.text}
            </Typography>
          </TimelineContent>
          <TimelineSeparator>
            <TimelineConnector sx={{bgcolor: 'green'}} />
            <TimelineDot 
              variant={item.done ? 'filled' : 'outlined'} 
              sx={{boxShadow: 'none'}}
            ></TimelineDot>
            <TimelineConnector sx={{bgcolor: 'green'}} />
          </TimelineSeparator>
        </TimelineItem>
      ))}
    </Timeline>
  )
}

const Roadmap = () => {
  return (
    <Timeline position="alternate">
      {phases.map((phase, i) => (
        <TimelineItem key={i}>
          <TimelineOppositeContent sx={{ m: 'auto 0' }}>
            <Typography variant="h6" component="span" sx={{mb: 0}}  >{phase.name}</Typography>
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineConnector sx={{bgcolor: 'grey.400'}} />
            <TimelineDot
              sx={{boxShadow: 'none'}}
              variant={phase.done ? 'filled' : 'outlined'}
            ></TimelineDot>
            <TimelineConnector sx={{bgcolor: 'grey.400'}} />
          </TimelineSeparator>
          <TimelineContent sx={{ py: '15px'}}  >
            {i % 2 === 0 
              ? <RoadmapItemsRight items={phase.phase} />
              : <RoadmapItemsLeft items={phase.phase} />
            }
          </TimelineContent>
        </TimelineItem>
      ))}
    </Timeline>
  )
}

const RoadmapMobile = () => {
  return (
    phases.map((phase, i) => (
      <Box key={i}>
        <Typography variant="h6" component="span">{phase.name}</Typography>
        <RoadmapItemsRight items={phase.phase} />
      </Box>
    ))
  )
}

const RoadmapSection = () => {

  return (
    <Box sx={{py: 7}}>
      <Container>
        <Typography 
          variant="h4" 
          component="div" 
          
          sx={{ fontWeight: 'bold', mb: 2, textAlign: 'center' }}
        >
          Roadmap
        </Typography>
        <Typography variant="body1"  sx={{ mb: 5, textAlign: 'center' }}>
          This Roadmap outlines our future plans
        </Typography>
        <Box sx={{
          display: { xs: 'none', md: 'block' }
        }}>
          <Roadmap />
        </Box>
        <Box sx={{
          display: { xs: 'block', sm: 'none' }
        }}>
          <RoadmapMobile />
        </Box>

      </Container>
    </Box>
  );
}
 
export default RoadmapSection;