import React from 'react';
import {
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {
    Surface,
    Chip,
    TextInput,
    Button,
    IconButton,
    HelperText
} from 'react-native-paper';
import { Icon } from 'react-native-vector-icons';
import { Dropdown } from 'react-native-material-dropdown';
import PageHeader from "../components/PageHeader";
import CardSummary from "../components/CardSummary";
import Colors from '../constants/Colors';
import Type from '../constants/Type';
import Space from '../constants/Space';

export default class CreateScreen extends React.Component {
  static navigationOptions = {
    //header: null,
  };

  render() {
    return (
      <View style={styles.container}>
        <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>

            <PageHeader
                style={styles.pageHeader}
                pageHeaderTitle="Add new sleep entry."
                pageHeaderDescription="Add a new entry into your sleep journal." />

            <View style={{marginTop: Space.stackPush}}>
                <TextInput
                        label='Date'
                        value="Wed 14th December"
                        mode="outlined"
                      />
                  <IconButton
    icon="add-a-photo"
    color={Colors.red500}
    size={20}
    onPress={() => console.log('Pressed')}
  />
                <HelperText
                    type="info">
                    Set to Today
                </HelperText>
           </View>

           <View style={{marginTop: Space.stackPush}}>
               <TextInput
                       label='Start'
                       value="12:00"
                       mode="outlined"
                     />
                 <HelperText
                     type="info">
                     What time did you go to bed?
                 </HelperText>
          </View>
          <View style={{marginTop: Space.stackPush}}>
              <TextInput
                      label='End'
                      value="06:00"
                      mode="outlined"
                    />
                <HelperText
                    type="info">
                    What time did you go to Wakeup?
                </HelperText>
         </View>

         <View style={{marginTop: Space.stackPush}}>
             <TextInput
                     label='Wakeups'
                     value="2"
                     mode="outlined"
                   />
               <HelperText
                   type="info">
                   How many times did you wake up?
               </HelperText>
        </View>

        <View style={{marginTop: Space.stackPush}}>
            <TextInput
                    label='Quality'
                    value="Not Great"
                    mode="outlined"
                  />
              <HelperText
                  type="info">
                  How good do you feel this sleep was?
              </HelperText>
       </View>

       <View style={{marginTop: Space.stackPush}}>
           <TextInput
                   label='Pre-bedtime Activity'
                   value="(Other) Put Kids to Bed"
                   mode="outlined"
                 />
             <HelperText
                 type="info">
                 What did you do before going to bed?
             </HelperText>
      </View>

      <View style={{marginTop: Space.stackPush}}>
          <Button icon="done" mode="contained" onPress={() => console.log('Pressed')}>
              Ok, Save
          </Button>
      </View>

           <Dropdown
               label='Favorite Fruit'
               data={[{
                  value: 'Banana',
                }, {
                  value: 'Mango',
                }, {
                  value: 'Pear',
                }]}
      />

        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.neutralWhite,
    padding: Space.sizeMedium
  }
});
