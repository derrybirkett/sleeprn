import React from 'react';
import {
  Platform,
  ScrollView,
  Layoutheet,
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
import PageHeader from "../components/PageHeader";
import CardSummary from "../components/CardSummary";
import Layout from '../constants/Layout';
import Colors from '../constants/Colors';
import Type from '../constants/Type';
import Space from '../constants/Space';
import Layer from '../constants/Layer';

export default class CreateScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  render() {
    return (
        <View style={{flex:1}}>

            <PageHeader
                pageHeaderTitle="Log Sleep"
                pageHeaderDescription="Add a new entry to your sleep journal. " />

            <ScrollView style={Layout.container} contentContainerStyle={Layout.contentContainer}>

                <View style={Layer.stackPush}>
                    <TextInput
                            label='Date'
                            value="Wed 14th December"
                            mode="outlined"
                          />
                    <HelperText
                        type="info">
                        Set to Today
                    </HelperText>
                    <IconButton
                      icon="add-a-photo"
                      color={Colors.red500}
                      size={20}
                      onPress={() => console.log('Pressed')}
                      />
                </View>

                <View style={Layer.stackPush}>
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

                <View style={Layer.stackPush}>
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

                 <View style={Layer.stackPush}>
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

                <View style={Layer.stackPush}>
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

               <View style={Layer.stackPush}>
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

              <View style={Layer.stackPush}>
                  <Button icon="done" mode="contained" onPress={() => console.log('Pressed')}>
                      Ok, Save
                  </Button>
              </View>

            </ScrollView>
      </View>
    );
  }
}
