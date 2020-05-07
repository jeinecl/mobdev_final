import React, { Component } from 'react';
import { StyleSheet, Text, View, FlatList, ImageBackground } from 'react-native';

export default class App extends Component {
  constructor(){
    super();
    this.state = {
      positif: '',
      sembuh: '',
      meninggal: '',
      data: [],
      refresh: false,
    }
  }

  componentDidMount =() =>{
    this.setState({refresh: true})
    fetch('https://covid19.mathdro.id/api')
    .then(response => response.json())
        .then(json => (
            this.setState({positif: json.confirmed.value}),
            this.setState({sembuh: json.recovered.value}),
            this.setState({meninggal: json.deaths.value}),
            console.log(json)
        )
      )
    fetch('https://indonesia-covid-19.mathdro.id/api/provinsi')
      .then(response => response.json())
      .then(json => this.setState(
        {
          data: json.data, refresh: false
        }
      )
    )
  }

  render() {
    return (
      <ImageBackground source={require('./assets/background.png')} style={{ width: '100%', height: '100%' }}>
      <View style={{ 
        flex: 4, 
        marginHorizontal: 8, 
        marginBottom: 30 
        }
      }>
        <View style={{ 
          flex: 1, 
          marginTop: 40, 
          marginBottom: 20 
          }
        }>
          <Text style={{ 
            alignSelf: "center", 
            fontSize: 35, 
            fontWeight: "bold"
            }
          }>Data Covid-19 Global & Indonesia</Text>
        </View>
  
        <View style={{ 
            flex: 4, 
            marginBottom: 30 
          }
        }>
          <View style={{ 
              marginTop: 45, 
              marginBottom: 5 
            }
          }>
            <Text style={{ 
                alignSelf: "center", 
                fontSize: 20, 
                fontWeight: "bold"
              }
            }>Global</Text>
          </View>
          <View style={{ 
              flex: 1, 
              flexDirection:"row", 
              justifyContent: "center" 
            }
          }>
            <View style={{ 
              flex: 1, 
              height: 90, 
              width: 100, 
              backgroundColor: "skyblue", 
              justifyContent: "center", 
              borderWidth: 0.3, 
              borderRadius: 15
            }
          }>
                <Text style={{ 
                  fontSize: 18, 
                  fontWeight: "bold", 
                  alignSelf:"center" 
                  }
                }>POSITIVE</Text>
                <Text style={{ 
                  fontWeight: "bold", 
                  alignSelf: "center" 
                  }
                }>{this.state.positif}</Text>
            </View>
            <View style={{ 
              flex: 1, 
              marginHorizontal: 10, 
              height: 90, 
              width: 100, 
              backgroundColor: "white", 
              justifyContent: "center", 
              borderWidth: 0.3, 
              borderRadius: 15
              }
            }>
                <Text style={{ 
                  fontSize: 18, 
                  fontWeight: "bold", 
                  alignSelf:"center" 
                  }
                }>RECOVERED</Text>
                <Text style={{ 
                  fontWeight: "bold", 
                  alignSelf: "center" 
                  }
                }>{this.state.sembuh}</Text>
            </View>
            <View style={{ 
              flex: 1, 
              height: 90, 
              width: 100, 
              backgroundColor: "aquamarine", 
              justifyContent: "center", 
              borderWidth: 0.3, 
              borderRadius: 15 
              }
            }>
                <Text style={{ 
                  fontSize: 18, 
                  fontWeight: "bold", 
                  alignSelf:"center" 
                  }
                }>DEATHS</Text>
                <Text style={{ 
                  fontWeight: "bold", 
                  alignSelf: "center"
                  }
                }>{this.state.meninggal}</Text>
            </View>
            </View>
        </View>
  
        <View style={{ 
          flex: 15, 
          marginTop: 20, 
          marginBottom: 10 
          }
        }>
          <View style={{ marginBottom: 10 }}>
            <Text style={{ 
              alignSelf: "center", 
              fontSize: 20, 
              fontWeight: "bold"
              }
            }>Indonesia</Text>
          </View>
          <View>
            <FlatList
              data={this.state.data}
              keyExtractor={item => item.fid.toString()}
              renderItem={({ item }) => (
                <View style={{ 
                  flexDirection: "row", 
                  borderWidth: 1, 
                  borderRadius: 6, 
                  marginBottom: 4, 
                  height: 40, 
                  justifyContent: "center"
                  }
                }>
                  <View style={{ 
                    flex: 1, 
                    justifyContent: "center"
                    }
                  }>
                    <Text style={{ marginLeft: 4 }}>{item.provinsi}</Text>
                  </View>
                  <View style={{ 
                    flex: 1, 
                    justifyContent: "center", 
                    flexDirection: "row" 
                    }
                  }>
                    <View style={{ 
                      flex: 1, 
                      justifyContent: "center", 
                      backgroundColor: "skyblue", 
                      borderRadius: 4, 
                      borderWidth: 0.8, 
                      marginVertical: 4, 
                      marginHorizontal: 2 
                      }
                    }>
                      <Text style={{ alignSelf: "center" }}>{item.kasusPosi}</Text>
                    </View>
                    <View style={{ 
                      flex: 1, 
                      justifyContent: "center", 
                      backgroundColor: "white", 
                      borderRadius: 4, 
                      borderWidth: 0.8, 
                      marginVertical: 4, 
                      marginHorizontal: 2 
                      }
                    }>
                      <Text style={{ alignSelf: "center" }}>{item.kasusSemb}</Text>
                    </View>
                    <View style={{ 
                      flex: 1, 
                      justifyContent: "center", 
                      backgroundColor: "aquamarine", 
                      borderRadius: 4, 
                      borderWidth: 0.8, 
                      marginVertical: 4, 
                      marginHorizontal: 2 }}>
                      <Text style={{ alignSelf: "center" }}>{item.kasusMeni}</Text>
                    </View>
                  </View>
                </View>
              )
            }
            refreshing={this.state.refresh}
            onRefresh={this.componentDidMount}
            />
          </View>
        </View>
        
      </View>
      </ImageBackground>
    );
  }
}