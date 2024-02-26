      const device = (playStore, appStore) => {
              let userAgent = navigator.userAgent.toLowerCase();
              var deviceType;
              switch (true) {
                case userAgent.includes('macintosh'):
                  deviceType = "Mac";
                  break;
                case userAgent.includes('iphone'):
                  deviceType = "iPhone";
                  break;
                case userAgent.includes('windows'):
                  deviceType = "Windows";
                  break;
                case userAgent.includes('android'):
                  deviceType = "Android";
                  break;
                default:
                  deviceType = "Unknown";
              }

              let address;
              switch (deviceType) {
                case deviceType == "Mac" || "iPhone":
                  console.log('mac')
                  address = appStore;
                  break;
                case deviceType == "Windows" || "Android":
                  console.log('android');
                  address = playStore;
                  break;
                default:
                  console.log('default')
                  address = playStore;
              }

              console.log("🚀 ~ file:~ device ~ address:", deviceType, address)

              toast.success(`You are using ${deviceType} device`)
              return address
              // console.log(appStore)
            };