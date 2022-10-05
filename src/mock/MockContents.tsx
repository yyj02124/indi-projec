import { Avatar, Box, Typography } from '@mui/material';
import { faker } from "@faker-js/faker";
import React from 'react'

const MockContents = () => {
    const randomNumberForImg = Math.random() * 100;
    const month = randomNumberForImg / 30;
    const randomName = faker.name.fullName();
    const randomNumber = faker.datatype.number();
  
    return (
      <Box m={2} mb={0}>
        <Box
          component="img"
          alt="randimg"
          src={`https://loremflickr.com/320/240?random=${randomNumberForImg}`}
          sx={{ width: 1, height: "55%" }}
        />
        <Box mt={1} display="flex">
          <Avatar
            alt="randavartar"
            src={`https://loremflickr.com/320/240/people?random=${randomNumberForImg}`}
            sx={{ marginRight: "10px" }}
          />
          <Box>
            <Typography fontWeight={500}>{faker.lorem.sentence()}</Typography>
            <Typography fontSize={13}>{randomName}</Typography>
            <Box display="flex">
              <Typography fontSize={13}>
                조회수{" "}
                {randomNumber < 1000
                  ? `${randomNumber}회 `
                  : randomNumber < 10000
                  ? `${(randomNumber / 1000).toPrecision(2)}천회 `
                  : `${(randomNumber / 10000).toPrecision(2)}만회 `}
              </Typography>
              <Typography fontSize={13}>
                {" "}
                •
                {randomNumberForImg < 10
                  ? `${randomNumberForImg.toPrecision(1)}일 전`
                  : randomNumberForImg >= 10 && randomNumberForImg < 30
                  ? `${randomNumberForImg.toPrecision(2)}일 전`
                  : `${month.toPrecision(1)}달 전`}
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>
    );
}

export default MockContents