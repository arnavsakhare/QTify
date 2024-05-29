import React, {useState} from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import styles from './Filters.module.css';

function a11yProps(index) {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
    };
}
  
function Filters({ filters, selectedIndex, setSelectedIndex }) {

    const handleChange = (event, newValue) => {
        setSelectedIndex(newValue);
    };

    return (
        <Box sx={{ width: '100%' }}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <Tabs 
                    value={selectedIndex} 
                    onChange={handleChange} 
                    aria-label="basic tabs example"
                    TabIndicatorProps={{
                        style: {
                          backgroundColor: "var(--color-primary)",
                        }
                    }}
                >

                    {filters.map((ele, idx) => (
                        <Tab
                            className={styles.label}
                            key={idx}
                            label={ele.label}
                            {...a11yProps(idx)}
                            sx={{'&.Mui-selected': {color: 'var(--color-white)'}}}
                        />
                    ))}

                </Tabs>
            </Box>
        
        </Box>
    );
}

export default Filters