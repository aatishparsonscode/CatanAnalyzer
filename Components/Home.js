import React from 'react';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native';

//import mui from 'material-ui';
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
import { Container, Header, Content, Button } from 'native-base';

class Home extends React.Component{
    constructor(props){
      super(props)
      this.state = {
       
         Board : [
                    [[0,null],[0,null],[0,null]],
                  [[0,null],[0,null],[0,null],[0,null]],
                [[0,null],[0,null],[0,null],[0,null],[0,null]],
                  [[0,null],[0,null],[0,null],[0,null]],
                    [[0,null],[0,null],[0,null]]
                ],
    //     Board : [
    //         [[10,'O'],[2,'S'],[9,'W']],
    //     [[12,'Wh'],[6,'B'],[4,'S'],[10,'B']],
    // [[9,'Wh'],[11,'W'],[0,'none'],[3,'W'],[8,'O']],
    //     [[8,'W'],[3,'O'],[4,'Wh'],[5,'S']],
    //         [[5,'B'],[6,'Wh'],[11,'S']]
    // ],
        colorChange:null,
        numberChange: null,
        chosen: true // true is color false is number
              
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
    resetBoard = () => {
      this.setState({Board: [
        [[0,null],[0,null],[0,null]],
      [[0,null],[0,null],[0,null],[0,null]],
    [[0,null],[0,null],[0,null],[0,null],[0,null]],
      [[0,null],[0,null],[0,null],[0,null]],
        [[0,null],[0,null],[0,null]]
    ]})
    }
    updateBoard = (y,x) => {
      let BoardCopy = this.state.Board
      if(this.state.chosen){
        BoardCopy[y][x][1] = this.state.colorChange
      }else{
        BoardCopy[y][x][0] = this.state.numberChange
      }
      this.setState({Board:BoardCopy})
    }
    render(){
      const {navigation} = this.props
      return (
        <SafeAreaView style={{alignContent:'center',justifyContent:'center',flexDirection:'column',flex:1}}>
          
          <View style={{flex:2.5}}>
            
            <View style={{flexDirection:'row',alignContent:'center',justifyContent:'center',flex:1}}>
              <Button transparent large style={{height:90}} onPress = {() => {this.updateBoard(0,0)} }>
                <MaterialCommunityIcons name="hexagon" size={70} color={this.getColor(this.state.Board[0][0][1])} />
                <Text style={{position:'absolute',fontSize:19 }}>      {this.state.Board[0][0][0]}</Text>
              </Button>
              <Button transparent large style={{height:90}} onPress = {() => {this.updateBoard(0,1)} }>
                <MaterialCommunityIcons name="hexagon" size={70} color={this.getColor(this.state.Board[0][1][1])} />
                <Text style={{position:'absolute',fontSize:19 }}>      {this.state.Board[0][1][0]}</Text>
              </Button>
              <Button transparent large style={{height:90}} onPress = {() => {this.updateBoard(0,2)} }>
                <MaterialCommunityIcons name="hexagon" size={70} color={this.getColor(this.state.Board[0][2][1])} />
                <Text style={{position:'absolute',fontSize:19 }}>      {this.state.Board[0][2][0]}</Text>
              </Button>
              </View>
  
              <View style={{flexDirection:'row',alignContent:'center',justifyContent:'center',flex:1}}>
              <Button transparent large style={{height:90}} onPress = {() => {this.updateBoard(1,0)} }>
                <MaterialCommunityIcons name="hexagon" size={70} color={this.getColor(this.state.Board[1][0][1])} />
                <Text style={{position:'absolute',fontSize:19 }}>      {this.state.Board[1][0][0]}</Text>
              </Button>
              <Button transparent large style={{height:90}} onPress = {() => {this.updateBoard(1,1)} }>
                <MaterialCommunityIcons name="hexagon" size={70} color={this.getColor(this.state.Board[1][1][1])} />
                <Text style={{position:'absolute',fontSize:19 }}>      {this.state.Board[1][1][0]}</Text>
              </Button>
              <Button transparent large style={{height:90}} onPress = {() => {this.updateBoard(1,2)} }>
                <MaterialCommunityIcons name="hexagon" size={70} color={this.getColor(this.state.Board[1][2][1])} />
                <Text style={{position:'absolute',fontSize:19 }}>      {this.state.Board[1][2][0]}</Text>
              </Button>
              <Button transparent large style={{height:90}} onPress = {() => {this.updateBoard(1,3)} }>
                <MaterialCommunityIcons name="hexagon" size={70} color={this.getColor(this.state.Board[1][3][1])} />
                <Text style={{position:'absolute',fontSize:19 }}>      {this.state.Board[1][3][0]}</Text>
              </Button>
              </View>
  
              <View style={{flexDirection:'row',alignContent:'center',justifyContent:'center',flex:1}}>
              <Button transparent large style={{height:90}} onPress = {() => {this.updateBoard(2,0)} }>
                <MaterialCommunityIcons name="hexagon" size={70} color={this.getColor(this.state.Board[2][0][1])} />
                <Text style={{position:'absolute',fontSize:19 }}>      {this.state.Board[2][0][0]}</Text>
              </Button>
              <Button transparent large style={{height:90}} onPress = {() => {this.updateBoard(2,1)} }>
                <MaterialCommunityIcons name="hexagon" size={70} color={this.getColor(this.state.Board[2][1][1])} />
                <Text style={{position:'absolute',fontSize:19 }}>      {this.state.Board[2][1][0]}</Text>
              </Button>
              <Button transparent large style={{height:90}} onPress = {() => {this.updateBoard(2,2)} }>
                <MaterialCommunityIcons name="hexagon" size={70} color={this.getColor(this.state.Board[2][2][1])} />
                <Text style={{position:'absolute',fontSize:19 }}>      {this.state.Board[2][2][0]}</Text>
              </Button>
              <Button transparent large style={{height:90}} onPress = {() => {this.updateBoard(2,3)} }>
                <MaterialCommunityIcons name="hexagon" size={70} color={this.getColor(this.state.Board[2][3][1])} />
                <Text style={{position:'absolute',fontSize:19 }}>      {this.state.Board[2][3][0]}</Text>
              </Button>
              <Button transparent large style={{height:90}} onPress = {() => {this.updateBoard(2,4)} }>
                <MaterialCommunityIcons name="hexagon" size={70} color={this.getColor(this.state.Board[2][4][1])} />
                <Text style={{position:'absolute',fontSize:19 }}>      {this.state.Board[2][4][0]}</Text>
              </Button>
              </View>
  
              <View style={{flexDirection:'row',alignContent:'center',justifyContent:'center',flex:1}}>
              <Button transparent large style={{height:90}} onPress = {() => {this.updateBoard(3,0)} }>
                <MaterialCommunityIcons name="hexagon" size={70} color={this.getColor(this.state.Board[3][0][1])} />
                <Text style={{position:'absolute',fontSize:19 }}>      {this.state.Board[3][0][0]}</Text>
              </Button>
              <Button transparent large style={{height:90}} onPress = {() => {this.updateBoard(3,1)} }>
                <MaterialCommunityIcons name="hexagon" size={70} color={this.getColor(this.state.Board[3][1][1])} />
                <Text style={{position:'absolute',fontSize:19 }}>      {this.state.Board[3][1][0]}</Text>
              </Button>
              <Button transparent large style={{height:90}} onPress = {() => {this.updateBoard(3,2)} }>
                <MaterialCommunityIcons name="hexagon" size={70} color={this.getColor(this.state.Board[3][2][1])} />
                <Text style={{position:'absolute',fontSize:19 }}>      {this.state.Board[3][2][0]}</Text>
              </Button>
              <Button transparent large style={{height:90}} onPress = {() => {this.updateBoard(3,3)} }>
                <MaterialCommunityIcons name="hexagon" size={70} color={this.getColor(this.state.Board[3][3][1])} />
                <Text style={{position:'absolute',fontSize:19 }}>      {this.state.Board[3][3][0]}</Text>
              </Button>
              </View>
  
              <View style={{flexDirection:'row',alignContent:'center',justifyContent:'center',flex:1}}>
              <Button transparent large style={{height:90}} onPress = {() => {this.updateBoard(4,0)} }>
                <MaterialCommunityIcons name="hexagon" size={70} color={this.getColor(this.state.Board[4][0][1])} />
                <Text style={{position:'absolute',fontSize:19 }}>      {this.state.Board[4][0][0]}</Text>
              </Button>
              <Button transparent large style={{height:90}} onPress = {() => {this.updateBoard(4,1)} }>
                <MaterialCommunityIcons name="hexagon" size={70} color={this.getColor(this.state.Board[4][1][1])} />
                <Text style={{position:'absolute',fontSize:19 }}>      {this.state.Board[4][1][0]}</Text>
              </Button>
              <Button transparent large style={{height:90}} onPress = {() => {this.updateBoard(4,2)} }>
                <MaterialCommunityIcons name="hexagon" size={70} color={this.getColor(this.state.Board[4][2][1])} />
                <Text style={{position:'absolute',fontSize:19 }}>      {this.state.Board[4][2][0]}</Text>
              </Button>
              </View>
            
            </View>
            <View style={{flex:0.3,flexDirection:'row',marginTop:10}}>
              <Text style={{fontSize:20,position:'absolute',color:'red'}}>Selected resource: {this.state.colorChange}</Text>
              <Text style={{fontSize:20,marginLeft:230,color:'red'}}>Selected number: {this.state.numberChange}</Text>
            </View>
            <View style={{flex:3,flexDirection:'column',justifyContent:'center'}}>
              <View style={{flexDirection:'row',flex:1}}>
                <Button bordered success style={{width:'30%',marginHorizontal:7,padding:10}} onPress = {() =>{this.setState({colorChange:"W",chosen:true})}}>
                  <Text>Select Wood</Text>
                  <MaterialCommunityIcons name="pine-tree" size={24} color="black" />
                </Button>
                <Button bordered warning style={{width:'30%',marginHorizontal:7,padding:10}} onPress = {() =>{this.setState({colorChange:"B",chosen:true})}}>
                  <Text>Select Brick</Text>
                  <MaterialCommunityIcons name="rectangle-outline" size={24} color="black" />
                </Button>
                <Button bordered success style={{width:'30%',marginHorizontal:7,padding:10}} onPress = {() =>{this.setState({colorChange:"S",chosen:true})}}>
                  <Text>Select Sheep</Text>
                  <MaterialCommunityIcons name="sheep" size={24} color="black" />
                </Button>
                </View>
                <View style={{flexDirection:'row',flex:1}}>
                <Button bordered warning style={{width:'30%',marginHorizontal:7,padding:10}} onPress = {() =>{this.setState({colorChange:"Wh",chosen:true})}}>
                  <Text>Select Wheat</Text>
                  <MaterialCommunityIcons name="tree" size={24} color="black" />
                </Button>
                <Button bordered dark style={{width:'30%',marginHorizontal:7,padding:10}} onPress = {() =>{this.setState({colorChange:"O",chosen:true})}}>
                  <Text>Select Ore</Text>
                  <MaterialCommunityIcons name="pickaxe" size={24} color="black" />
                </Button>
                <Button bordered dark style={{width:'30%',marginHorizontal:7,padding:10}} onPress = {() =>{this.setState({colorChange:"none",chosen:true})}}>
                  <Text>Select Desert</Text>
                  <MaterialCommunityIcons name="cactus" size={24} color="black" />
                </Button>
                </View>
  
                <View style={{flexDirection:'row',flex:1}}>
                <Button bordered success style={{padding:15,marginTop:10,marginHorizontal:10}} onPress = {() =>{this.setState({numberChange:0,chosen:false})}}>
                    <Text>Desert</Text>
                    
                  </Button>
                  <Button bordered success style={{padding:15,marginTop:10,marginHorizontal:10}} onPress = {() =>{this.setState({numberChange:2,chosen:false})}}>
                    <Text>2</Text>
                    
                  </Button><Button bordered success style={{padding:15,marginTop:10,marginHorizontal:10}} onPress = {() =>{this.setState({numberChange:3,chosen:false})}}>
                    <Text>3</Text>
                    
                  </Button><Button bordered success style={{padding:15,marginTop:10,marginHorizontal:10}} onPress = {() =>{this.setState({numberChange:4,chosen:false})}}>
                    <Text>4</Text>
                    
                  </Button><Button bordered success style={{padding:15,marginTop:10,marginHorizontal:10}} onPress = {() =>{this.setState({numberChange:5,chosen:false})}}>
                    <Text>5</Text>
                    
                  </Button><Button bordered success style={{padding:15,marginTop:10,marginHorizontal:10}} onPress = {() =>{this.setState({numberChange:6,chosen:false})}}>
                    <Text>6</Text>
                    </Button>
                  </View>
                  <View style={{flexDirection:'row',flex:1}}>
                  <Button bordered success style={{padding:15,marginTop:10,marginHorizontal:10}} onPress = {() =>{this.setState({numberChange:8,chosen:false})}}>
                    <Text>8</Text>
                    
                  </Button><Button bordered success style={{padding:15,marginTop:10,marginHorizontal:10}} onPress = {() =>{this.setState({numberChange:9,chosen:false})}}>
                    <Text>9</Text>
                    
                  </Button><Button bordered success style={{padding:15,marginTop:10,marginHorizontal:10}} onPress = {() =>{this.setState({numberChange:10,chosen:false})}}>
                    <Text>10</Text>
                    
                  </Button><Button bordered success style={{padding:15,marginTop:10,marginHorizontal:10}} onPress = {() =>{this.setState({numberChange:11,chosen:false})}}>
                    <Text>11</Text>
                    
                  </Button>
                  <Button bordered success style={{padding:15,marginTop:10,marginHorizontal:10}} onPress = {() =>{this.setState({numberChange:12,chosen:false})}}>
                    <Text>12</Text>
                    
                  </Button>
                </View>
                <View style={{flex:1.8}}>
                  <Button rounded danger style= {{justifyContent:'center',alignContent:'center',marginHorizontal:10,marginVertical:10}} onPress = {() => {this.resetBoard()}}>
                    <Text >Reset</Text>
                  </Button>
                  <Button rounded success style= {{justifyContent:'center',alignContent:'center',marginHorizontal:10,marginBottom:15}} onPress = {() => navigation.navigate('Analysis',{
                      BoardGiven:this.state.Board
                  })}>
                    <Text>Analyze</Text>
                  </Button>
                </View>
            </View>
        </SafeAreaView>
      )
    }
    
  }
  export default function(props) {
    const navigation = useNavigation();
  
    return <Home {...props} navigation={navigation} />;
  }