import 'react-native-gesture-handler';
import React from 'react';
import { StyleSheet, Text, View, SafeAreaView,FlatList } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
import { Container, Header, Content, Button } from 'native-base';
import { useNavigation,useRoute } from '@react-navigation/native';



const extractKey = ({ key }) => key
class AnalysisPage extends React.Component {
  /* 2. Get the param */
  constructor(props){
    super(props)
    this.state = {
      pipCount:22
            
    }
    
}
getColor = (color) => {
    if(color == 'W'){
      return "#019031"
    }else if(color == 'B'){
      return "#B83227"
    }else if(color == 'S'){
      return "#45CE30"
    }else if(color == 'O'){
      return "silver"
    }else if(color == "Wh"){
      return "yellow"
    }else if(color == 'none'){
      return "#F9DDA4"
    }else{
      return "black"
    }
  }
  renderItem = ({item})=>{
    return(
    <View style={{flexDirection:'row',backgroundColor:'black',justifyContent:'space-evenly'}}>
        <Text>hi</Text>
            <View>
                
                <View style={{flexDirection:'row',alignContent:'center',justifyContent:'center',flex:1}}>
                    <Button transparent large style={{height:90}}>
                    <MaterialCommunityIcons name="hexagon" size={70} color={this.getColor(item.one[0][1])} />
                        <Text style={{position:'absolute',fontSize:19 }}>      {item.one[0][0]}</Text>
                    </Button>
                        
                    
                    
                </View>
        
                <View style={{flexDirection:'row',alignContent:'center',justifyContent:'center',flex:1}}>
                    {item.one[1] != undefined ? 
                    <Button transparent large style={{height:90}}>
                        <MaterialCommunityIcons name="hexagon" size={70} color={this.getColor(item.one[1][1])} />
                            <Text style={{position:'absolute',fontSize:19 }}>      {item.one[1][0]}</Text>
                    </Button>
                    :null}
                    {item.one[2] != undefined ? 
                        <Button transparent large style={{height:90}}>
                            <MaterialCommunityIcons name="hexagon" size={70} color={this.getColor(item.one[2][1])} />
                                <Text style={{position:'absolute',fontSize:19 }}>      {item.one[2][0]}</Text>
                        </Button>
                    :null}   
                </View>
            </View>
            <View>
                    <Text style={{color:'white',fontSize:20,marginTop:18}}>|{'\n'}|{'\n'}|{'\n'}|{'\n'}|{'\n'}</Text>
            </View>
            <View>
                
            <View style={{flexDirection:'row',alignContent:'center',justifyContent:'center',flex:1}}>
                <Button transparent large style={{height:90}}>
                <MaterialCommunityIcons name="hexagon" size={70} color={this.getColor(item.two[0][1])} />
                    <Text style={{position:'absolute',fontSize:19 }}>      {item.two[0][0]}</Text>
                </Button>
                    
                    
                    
            </View>

            <View style={{flexDirection:'row',alignContent:'center',justifyContent:'center',flex:1}}>
                {item.two[1] != undefined ? 
                <Button transparent large style={{height:90}}>
                    <MaterialCommunityIcons name="hexagon" size={70} color={this.getColor(item.two[1][1])} />
                        <Text style={{position:'absolute',fontSize:19 }}>      {item.two[1][0]}</Text>
                </Button>
                :null}
                {item.two[2] != undefined ? 
                    <Button transparent large style={{height:90}}>
                        <MaterialCommunityIcons name="hexagon" size={70} color={this.getColor(item.two[2][1])} />
                            <Text style={{position:'absolute',fontSize:19 }}>      {item.two[2][0]}</Text>
                    </Button>
                :null}   
            </View>
            </View>
            <View>
                <Text style={{color:'white',fontSize:18}}>____________{'\n'}Probability{'\n'}{item.probabilty}{'\n'}Strategy{'\n'}{item.strategy}</Text>
                
            </View>
    </View>
    )
  }
  render(){
    const { route } = this.props;
    const BoardGiven = route.params.BoardGiven
    const intersections = getIntersect(BoardGiven)
    //console.log(BoardGiven,comparePairs(getIntersect(BoardGiven),this.state.pipCount))
    const pairs = comparePairs(getIntersect(BoardGiven),this.state.pipCount)
    pairs.sort((a, b) => (a.probabilty > b.probabilty) ? 1 : -1)
    console.log(pairs)
    return(
        <Container>
          
          
          <FlatList
            style={{flex:1}}
            data={pairs}
            renderItem={this.renderItem}
            keyExtractor={extractKey}     
          />
          <Button style={{alignContent:'center',justifyContent:'center',margin:25}}
          onPress={() => {this.setState({pipCount:this.state.pipCount-1})}}>
              <Text>More options</Text>
          </Button>
          <Button style={{alignContent:'center',justifyContent:'center',margin:25}}
          onPress={() => {this.setState({pipCount:this.state.pipCount+1})}}>
              <Text>Less options</Text>
          </Button>
        </Container> 
      
    )
  }
}


export default function AnalysisFuncPage(props) {
    const navigation = useNavigation();
    const route = useRoute()
    return <AnalysisPage {...props} navigation={navigation} route={route} />;
  }
  //W = Wood, B = Brick, S = Sheep, O = Ore, Wh = Wheat
  //total combos 12 + 24 = 36
  // format [number,resource]
  const Board = [
          [[10,'O'],[2,'S'],[9,'W']],
      [[12,'Wh'],[6,'B'],[4,'S'],[10,'B']],
  [[9,'Wh'],[11,'W'],[0,'none'],[3,'W'],[8,'O']],
      [[8,'W'],[3,'O'],[4,'Wh'],[5,'S']],
          [[5,'B'],[6,'Wh'],[11,'S']]
  ]
  // const Board = [
  //   [[5,'B'],[8,'Wh'],[0,'none']],
  // [[2,'Wh'],[10,'W'],[3,'W'],[4,'B']],
  // [[6,'Wh'],[9,'B'],[11,'Wh'],[6,'S'],[11,'W']],
  // [[3,'O'],[4,'O'],[5,'S'],[12,'O']],
  //   [[8,'S'],[10,'S'],[9,'W']]
  // ]
  // y up down x side to side
  
  
  function Analysis(intersect1,intersect2,pipCut,key){
   // example intersect [[3,"O"],[4,"Wh"],[0,"none"]] or [[6,"B"],[11,"W"],[0,"none"]]
   //check probability
    let totProb = 0
    let allIntersects = intersect1.concat(intersect2) //[[3,"O"],[4,"Wh"],[0,"none"],[6,"B"],[11,"W"],[8,"B"]]
    //let numsTaken = []
    for(var i = 0; i < allIntersects.length;i++){
      //if(!numsTaken.includes(allIntersects[i][0])){
        
        totProb+=getProbability(allIntersects[i][0])
      //}
      //numsTaken.push(allIntersects[i][0])
    }
    
    if(totProb < pipCut){
     
      return false
    }
    
  //   Combos  - 
  // Clay wood - give combo probability and ratio
  // Wheat ore - give combo probability and ratio
  // Wheat ore sheep - give combo probability and ratio
  // Lots of sheep - lowest relevance 
    
    let resources = [0,0,0,0,0] // in order wood,brick,sheep,wheat,ore
    for(var i = 0; i < allIntersects.length;i++){
      if(allIntersects[i][1] == "W"){
        resources[0] += getProbability(allIntersects[i][0])
        
      }else if(allIntersects[i][1] == "B"){
        resources[1] += getProbability(allIntersects[i][0])
        
      }
      else if(allIntersects[i][1] == "S"){
        resources[2] += getProbability(allIntersects[i][0])
        
      }
      else if(allIntersects[i][1] == "Wh"){
        resources[3] += getProbability(allIntersects[i][0])
        
      }
      else if(allIntersects[i][1] == "O"){
        resources[4] += getProbability(allIntersects[i][0])
        
      }else{
        
      }
    }
    //check diversity
    let zeros = 0
    for(var i = 0; i < resources.length; i++){
      if(resources[i] == 0){
        zeros+=1
      }
    }
    if(zeros > 1){
      return false
    }
    
    //get strat
    const indexOfMaxValue = resources.indexOf(Math.max(...resources));
    let strat = ''
    if(indexOfMaxValue == 0 || indexOfMaxValue == 1){
      if(resources[0] == resources[1] || resources[0] == resources[1]+1 || resources[0]==resources[1]-1){
        strat = 'W/B'
      }else{
        return false
      }
    }
    else if(indexOfMaxValue == 4 || indexOfMaxValue == 3){
      if(resources[3] == resources[4] && (resources[4]== resources[2] || resources[4] == (resources[2]+1))  ){
       
        strat = 'O/Wh/S'
      }else if((resources[3] == resources[4] || resources[3] + 1 == resources[4] || resources[3]+2 == resources[4]) && resources[4] >= 5){
        
        strat = 'O/Wh'
      }else{
        
        return false
      }
    // }else if(indexOfMaxValue == 2){ //with port - add later
    //   if(resources[2] > 10){
    //     strat = 'S'
    //   }else{
    //     return false
    //   }
     }else{
      return false
    }
    return {key:key ,one:intersect1,two:intersect2,strategy:strat,probabilty:totProb}
    
    
  
  }
  
  function getProbability(num){
    if(num == 6 || num == 8){
      return 5
    }else if(num==5 || num == 9){
      return 4
    }else if(num==4 || num == 10){
      return 3
    }else if(num==3 || num == 11){
      return 2
    }else if(num==2 || num == 12){
      return 1
    }else{
      return 0
    }
  }
  
  //finds all possbile spots - add 3:1 and 2:1 later to edge cases
  function getIntersect(Board){
    var array = []
    //edge cases listed out
    //getHorizontaledges
    array.push([Board[0][0],Board[0][1]])
    array.push([Board[0][1],Board[0][2]])
    array.push([Board[4][0],Board[4][1]])
    array.push([Board[4][1],Board[4][2]])
  
    //getVertical edges
    //right side
    array.push([Board[0][0],Board[1][0]])
    array.push([Board[1][0],Board[2][0]])
    array.push([Board[2][0],Board[3][0]])
    array.push([Board[3][0],Board[4][0]])
    //left side
    array.push([Board[0][2],Board[1][3]])
    array.push([Board[1][3],Board[2][4]])
    array.push([Board[2][4],Board[3][3]])
    array.push([Board[3][3],Board[4][2]])
  
  
    //middle
    for(var y = 0; y < Board.length-3; y++){
          for(var x= 0 ; x < Board[y].length;x++){
            let spot = Board[y][x]
           
            
            if(Board[y+1][x] !== undefined && Board[y+1][x+1] !== undefined){
              
              array.push([spot,Board[y+1][x],Board[y+1][x+1]])
              
            }
            if(Board[y][x+1] !== undefined && Board[y+1][x+1] !== undefined){
              array.push([spot,Board[y][x+1],Board[y+1][x+1]])
             
            }
            
          }
      
    }
    for(var y = 4; y > Board.length-3; y--){
      for(var x= 0 ; x < Board[y].length;x++){
        let spot = Board[y][x]
        
        
        
        if(Board[y-1][x] !== undefined && Board[y-1][x+1] !== undefined){
          
          array.push([spot,Board[y-1][x],Board[y-1][x+1]])
       
        }
        if(Board[y][x+1] !== undefined && Board[y-1][x+1] !== undefined){
          array.push([spot,Board[y][x+1],Board[y-1][x+1]])
        
        }
       
      }
  
  }
  
    return array
  }
  
  function comparePairs(Pairs,pipCut){
    
    let bestPairs = []
    var count = 0
    for(var i = 0;i<Pairs.length-1;i++){
      var current = Pairs[i]
      for(var j = i+1;j<Pairs.length;j++){
        //analyze pairs and if good return Pairs with strategy and overall metadata(probability etc) should use object
        //if bad return false
       
        let add = Analysis(current,Pairs[j],pipCut,count)
        
        if(add != false){
          //console.log(add,"pure object -------------------------------")
          bestPairs.push(add)
          count++
          //console.log(bestPairs,"array end ----------------------------------",bestPairs.length)
        }
  
      }
    }
    console.log(bestPairs.length)
    return bestPairs
  }
  
  