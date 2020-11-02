import React from 'react';
import {Text,View,TouchableOpacity,StyleSheet} from 'react-native';
import * as Permissions from 'expo-permissions';
import {BarCodeScanner, BarcodeScanner} from 'expo-barcode-scanner';

constructor(){
    super()
    this.state={
        hasCameraPermissions:null,
        scanned:false,
        scannedData:"",
        buttonState="normal"
    }
}


export default class TransactionScreen extends React.Component{

    getCameraPermissions=async ()=>{
        
        const {status}=await Permissions.askAsync(Permission.Camera);
        this.setState({
            hasCameraPermssions:status==='granted',
            buttonState:"clicked",
            scannedData:false
        })
    }
     handleBarCodeScanned=async({

        type,data
     })=>{
         this.setState({
             scannedData:data,
             buttonState:"normal",
             scannedData:true
         })

     }



    

render(){
    const hasCameraPermissions=this.state.hasCameraPermissions;
    const scanned=this.state.scanned;
    const buttonState=this.state.buttonState;
    if(buttonState==="clicked"&& hasCameraPermissions){
        return( 
        <BarCodeScanner
        onBarCodeScanned={scanned? undeined:this.handleBarCodeScanned}
        >
         
        </BarCodeScanner>

        )
        }
return(
<View styles={styles.container}>
<Text style={styles.buttonText}> 
hasCameraPermissions===true?this.state.scannedData:"RequestCameraPermission"
</Text>
<TouchableOpacity style={styles.scanButton}
onPress={this.getCameraPrmissions}
>
<Text style={styles.buttonText}> Scan QR Code</Text>

</TouchableOpacity>
</View>
)
}
}

const styles=StyleSheet.create({
container:{
flex:1,
justifyContent:"center",
alignItem:"center"


},
scanButton:{
    backgroundColor:"blue",
    margin:10,
    padding:10,
    borderWidth:1,
    borderRadius:5
},
buttonText:{
    fontSize:17,
    textDecorationLine:"underline"
}

})