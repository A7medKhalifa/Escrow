import { PermissionsAndroid, Platform } from 'react-native';
import RNFetchBlob from 'rn-fetch-blob';
// import DocumentPicker from "react-native-document-picker";


export const getFileExtention = (fileUrl: any) => {
    return /[.]/.exec(fileUrl) ? /[^.]+$/.exec(fileUrl) : undefined;
};
export const TransferDate = (ItemDate: any) => {
    const year = ItemDate?.slice(0, 4)
    const month = parseInt(ItemDate?.slice(6, 7))
    const day = parseInt(ItemDate?.slice(8, 10))
    const m_names = new Array("January", "February", "March",
        "April", "May", "June", "July", "August", "September",
        "October", "November", "December");


    var sup = "";
    if (day == 1 || day == 21 || day == 31) {
        sup = "st";
    }
    else if (day == 2 || day == 22) {
        sup = "nd";
    }
    else if (day == 3 || day == 23) {
        sup = "rd";
    }
    else {
        sup = "th";
    }

    return (day + sup + " " + m_names[month + 1] + " " + year);

}
// export const PickDoc = async (
//   setPdfFile: any,
//   feild: any,
//   addFunc: () => {}
// ) => {
//   try {
//     const res = await DocumentPicker.pick({
//       type: [DocumentPicker.types.pdf],
//     });
//     //@ts-ignore
//     // tron.log(res[0]?.uri);
//     setPdfFile(`${feild}`, {
//       uri: res[0]?.uri,
//       type: res[0]?.type,
//       name: res[0]?.name,
//     });
//     if (addFunc) {
//       addFunc();
//     }
//     // let file = {
//     //   uri: res[0]?.uri,
//     //   type: res[0]?.type,
//     //   name: res[0]?.name,
//     // };
//   } catch (err: any) {
//     if (DocumentPicker.isCancel(err)) {
//       if (addFunc) {
//         addFunc();
//       }
//       // Toast.show({
//       //   type: 'info',
//       //   text1: err?.message,
//       // });
//     } else {
//       if (addFunc) {
//         addFunc();
//       }
//       throw err;
//     }
//   }
// };


export const downloadFile = (fileUrl: any, setDisabled: any) => {
    let date = new Date();
    let FILE_URL = fileUrl;
    let file_ext = getFileExtention(FILE_URL);

    file_ext = '.' + file_ext[0];

    const { config, fs } = RNFetchBlob;
    let RootDir = fs.dirs.PictureDir;
    let options = {
        fileCache: true,
        addAndroidDownloads: {
            path:
                RootDir +
                '/file_' +
                Math.floor(date.getTime() + date.getSeconds() / 2) +
                file_ext,
            description: 'downloading file...',
            notification: true,
            useDownloadManager: true,
        },
    };
    config(options)
        .fetch('GET', FILE_URL)
        .then((res: any) => {
            //console.log('res -> ', JSON.stringify(res));
            setDisabled(true);
            // alert('File Downloaded Successfully.');
        });
};
export const checkPermissionAndDownloadFile = async (fileUrl: any, setDisabled: any) => {
    if (Platform.OS === 'ios') {
        downloadFile(fileUrl, setDisabled);
    } else {
        try {
            const granted = await PermissionsAndroid.request(
                PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
                {
                    title: 'Storage Permission Required',
                    message: 'Application needs access to your storage to download File',
                },
            );
            if (granted === PermissionsAndroid.RESULTS.GRANTED) {
                downloadFile(fileUrl, setDisabled);
                //console.log('Storage Permission Granted.');
            } else {
                Alert.alert('Error', 'Storage Permission Not Granted');
            }
        } catch (err) {
            console.log('++++' + err);
        }
    }
};

export const CheckEqualsInValues = (MileStones: any[], EscrowValue: number) => {
    let TotalValue = 0
    for (var i = 0; i < MileStones.length; i++) {
        TotalValue += parseInt(MileStones[i].value)
    }
    return (TotalValue == EscrowValue)
}





