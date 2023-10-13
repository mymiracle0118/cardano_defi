import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Grid';
import Chart from "react-apexcharts";

const chartdata = {
  series: [17, 5, 3, 33, 17, 3, 15, 5.5, 1.5],
  options: {
    labels: ['Pre sale','Private sale', 'Public sale', 'Staking Rewards', 'Cex Reserved', 'Team Locked', 'Dex Liquidity', 'Locked Incentives','airdrop'],
    chart: {
      width: "100%",
      type: 'donut',
    },
    plotOptions: {
      pie: {
        donut: {
          size: '55%'
        }
      }
    },
    title: {
      text: "P S",
      margin: 0,
      offsetX: 330,
      offsetY: 280,
      floating: false,
      style: {
        fontSize:  '84px',
        fontWeight:  'bold',
        color:  'red'
      },
    },
    dataLabels: {
      enabled: true,
      style: {
        fontSize: '24px',
        fontFamily: 'Helvetica, Arial, sans-serif',
        fontWeight: 'bold',
        colors: undefined
      }
    },
    fill: {
      type: 'gradient',
    },
    legend: {
      show: true,
      fontSize: '15px',
      fontFamily: 'Helvetica, Arial',
      fontWeight: 400,
      position: "bottom",
      itemMargin: {
        horizontal: 0,
        vertical: 0
      },
      labels: {
        useSeriesColors: false
    },
      formatter: function(seriesName, opts) {
        return [" ", seriesName, " - ", opts.w.globals.series[opts.seriesIndex], "%   ."]
      }
    },
    responsive: [{
      breakpoint: 480,
      options: {
        chart: {
          width: 480,
          height: 600
        },
        legend: {
          position: 'bottom',
          fontSize: '12px',
          horizontalAlign: 'left', 
          itemMargin: {
            horizontal: 125,
            vertical: 0
          },
        },
        title: {
          text: "P S",
          margin: 0,
          offsetX: 190,
          offsetY: 190,
          floating: false,
          style: {
            fontSize:  '54px',
            fontWeight:  'bold',
            color:  'red'
          },
        },
        dataLabels: {
          enabled: true,
          style: {
            fontSize: '10px',
            fontFamily: 'Helvetica, Arial, sans-serif',
            colors: undefined
          }
        },
      }
    }]
  },


};

const TokenomicsSection = () => {
  return (
    <Box 
      id="tokenomics" 
      sx={{
        py: 7, 
        borderColor: "grey.100"
      }}
    >
      <Container>
        <Typography 
          variant="h4" 
          component="div" 
          sx={{ fontWeight: 'bold', mb: 2, textAlign: 'center' }}
        >
          Tokenomics
        </Typography>
        <Typography variant="body1" sx={{ mb: 5, maxWidth: 800, mx: 'auto', textAlign: 'center' }}>
          During the pre-sale, you will have the option to buy $PS at a fixed rate of 0.017 ADA per 1 $PS, pre-sale supports only ADA. All $PS purchased can be claimed at the pre-sale page after the end of the vesting period "10-May".
        </Typography>
        <Typography 
          variant="h1" 
          component="div" 
          sx={{ 
            fontWeight: 700, 
            textAlign: 'center', 
            color: 'red',
          }}
        >
          500M
        </Typography>
        <Typography 
          variant="h6" 
          component="div"
          sx={{ mb: 5, textAlign: 'center' }}
        >
          Total Supply
        </Typography>
        <Card 
          elevation={0} 
          sx={{
            borderRadius: 5, 
            p: 2,
            boxShadow: '0 2px 16px rgb(53 69 89 / 5%)'
          }}
        >
          <CardContent>
            <Typography 
              variant="h5" 
              component="div" 
              sx={{ fontWeight: 'bold', mb: 4, textAlign: 'center' }}
            >
              Tokenomics Statistics
            </Typography>
            <Grid container justifyContent="center">
              <Grid item>
                <Chart options={chartdata.options} type="donut" series={chartdata.series} width={800} />
              </Grid>
            </Grid>
            {/* </Grid>
            {/* {statistics.map((item, i) => (
              <Grid container key={i} sx={{mt: 2}}>
                <Grid item xs={12} md={4}>
                  <Typography 
                    variant="h6" 
                    component="span"
                    color = "block"
                  >
                    {item.label}
                  </Typography>
                </Grid>
                <Grid item xs={12} md={8}>
                  <Stack 
                    direction="row" 
                    spacing={2}
                    alignItems='center'
                  >
                    
                    <Box sx={{width: '90%'}}>
                      <BorderLinearProgress variant="determinate" value={item.value}/>
                    </Box>
                    <Box sx={{width: '10%'}}>
                      <Typography 
                        variant="h6" 
                        component="span" 
                        sx={{mb: 0}}
                      >
                        {item.value}%
                      </Typography>
                    </Box>
                  </Stack>
                </Grid>
              </Grid>
            ))} */}
          </CardContent>
        </Card>
      </Container>
    </Box>
  );
}
 
export default TokenomicsSection;
