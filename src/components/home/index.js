import React from 'react'
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { Grid } from '@material-ui/core';
import Spinner from '../loading';
import DataList from '../datatable'
import Text from './text.json'

const HomeUI = ({ loading, card, handleInputChange,handleSubmit }) => {
  return (
    <div style={{ margin: 20 }} >
      <Grid
        spacing={4}
        container
        direction="column"
        justify="center"
        alignItems="center">
          {Text.searchtext}
        <TextField
          id="standard-basic"
          label="Search"
          onChange={handleInputChange}
        />
        
        <Button
          variant="contained"
          color="secondary"
          onClick={handleSubmit}
        >
          {loading ? <Spinner /> : <i>{Text.search}</i>}
      </Button>
      
      </Grid>
      <DataList card={card}/>

    </div>
  )
}

export default HomeUI