import React from 'react';
import{StyleSheet,Text, View, Image} from 'react-native';
import {createAppContainer} from 'react-navigation';
import{createBottomTabNavigator} from 'react-navigation-tabs';
getCameraPermissions = async (id) =>{
    const {status}  = await Permissions.askAsync(Permissions.CAMERA);

    this.setState({
      /*status === "granted" is true when user has granted permission
        status === "granted" is false when user has not granted the permission
      */
      hasCameraPermissions : status === "granted",
      buttonState : id,
      scanned : false
    })
  }


  initiateBookIssue = async ()=>{
    db.collection("transaction").add({
      'studentId' : this.state.scannedStudentId,
      'bookId' : this.state.scannedBookId,
      'data' : firebase.firestore.Timestamp.now().toDate(),
      'transactionType' : "Issue"
    })
    db.collection("books").doc(this.state.scannedBookId).update({
        'bookAvailability' : false

        db.collection("students").doc(this.state.scannedStudentId).update({
            'numberOfBooksIssued' : firebase.firestore.FieldValue.increment(1)

            if (buttonState === "normal"){
                return(
                  <View style={styles.container}>
        
                  <Text style={styles.displayText}>{
                    hasCameraPermissions===true ? this.state.scannedData: "Request Camera Permission"
                  }</Text>     
        
                  <TouchableOpacity
                    onPress={this.getCameraPermissions}
                    style={styles.scanButton}>
                    <Text style={styles.buttonText}>Scan QR Code</Text>
                  </TouchableOpacity>
                </View>
                );
              }
            }
          }


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
      )
  }