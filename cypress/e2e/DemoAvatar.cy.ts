
import common = require('mocha/lib/interfaces/common');
import avatarTestData from '../data/avatarTestData';
import 'cypress-real-events/support';

beforeEach(() => {
  cy.visit('/');
  cy.get('[data-cy="hamburger-menu"]').click();
  cy.get('[data-cy="avatar-component"]').click();
})

describe('ids Avatar Demo test', () => {
  const allCombinations = [] as any[];

  avatarTestData.allSizes.forEach((size) => {
    avatarTestData.allVariants.forEach((variant) => {
        allCombinations.push({ size, variant });
      });
    });

//1.  width and height
xit('Checks the width and height of avatar-monogram', () => {
  allCombinations.forEach((item) => {
    avatarTestData.allHeight.forEach((height) => {
      avatarTestData.allWidth.forEach((width) => {
        const avatarSelector = `#${item.variant}-${item.size}-avatar-monogram`;
        cy.get(avatarSelector).should('be.visible')
          .should(($el) => {
          expect($el).to.have.css('height', height[item.size]);
          expect($el).to.have.css('width', width[item.size]);
          });
      });
    });
  });
});
  xit('Checks the width and height of avatar-user', () => {
    allCombinations.forEach((item) => {
      avatarTestData.allHeight.forEach((height) => {
        avatarTestData.allWidth.forEach((width) => {
          const avatarSelector = `#${item.variant}-${item.size}-avatar-user`;
          cy.get(avatarSelector).should('be.visible')
            .should(($el) => {
            expect($el).to.have.css('height', height[item.size]);
            expect($el).to.have.css('width', width[item.size]);
            });
        });
      });
    });
  });
  xit('Checks the width and height of avatar-with-image', () => {
    allCombinations.forEach((item) => {
      avatarTestData.allHeight.forEach((height) => {
        avatarTestData.allWidth.forEach((width) => {
          const avatarSelector = `#${item.size}-avatar-with-image`;
          cy.get(avatarSelector).should('be.visible')
            .should(($el) => {
            expect($el).to.have.css('height', height[item.size]);
            expect($el).to.have.css('width', width[item.size]);
            });
        });
      });
    });
  });
  //2. common
  xit('Checks common css rules of avatar-monogram', () => {
    allCombinations.forEach((item) => {
      avatarTestData.common.forEach((common) => {
        const avatarSelector = `#${item.variant}-${item.size}-avatar-monogram`;
        cy.get(avatarSelector)
          .should('be.visible')
          .should('have.css', 'display', common['display'])
          .should('have.css', 'font-style', common['fontStyle'])
          .should('have.css', 'text-align', common['textAlign'])
          .should('have.css', 'align-items', common['alignItems'])
          .should('have.css', 'flex-direction', common['flexDirection'])
          .should('have.css', 'justify-content', common['justifyContent']);
      });
    });
  });
  xit('Checks common css rules of avatar-user', () => {
    allCombinations.forEach((item) => {
      avatarTestData.common.forEach((common) => {
        const avatarSelector = `#${item.variant}-${item.size}-avatar-user`;
        cy.get(avatarSelector)
          .should('be.visible')
          .should('have.css', 'display', common['display'])
          .should('have.css', 'font-style', common['fontStyle'])
          .should('have.css', 'text-align', common['textAlign'])
          .should('have.css', 'align-items', common['alignItems'])
          .should('have.css', 'flex-direction', common['flexDirection'])
          .should('have.css', 'justify-content', common['justifyContent']);
      });
    });
  });
  xit('Checks common css rules of avatar-with-image', () => {
    allCombinations.forEach((item) => {
      avatarTestData.common.forEach((common) => {
        const avatarSelector = `#${item.size}-avatar-with-image`;
        cy.get(avatarSelector)
          .should('be.visible')
          .should('have.css', 'display', common['display'])
          .should('have.css', 'font-style', common['fontStyle'])
          .should('have.css', 'text-align', common['textAlign'])
          .should('have.css', 'align-items', common['alignItems'])
          .should('have.css', 'flex-direction', common['flexDirection'])
          .should('have.css', 'justify-content', common['justifyContent']);
      });
    });
  });  
//3. Font
  xit('Checks the font-size of avatar-monogram', () => {
    allCombinations.forEach((item) => {
      avatarTestData.allFontSize.forEach((font) => {
        avatarTestData.allFontWeight.forEach((weight) => {
        const avatarSelector = `#${item.variant}-${item.size}-avatar-monogram`;
        cy.get(avatarSelector).should('be.visible').should(($el) => {
          const styles = window.getComputedStyle($el[0]);
          expect(styles.fontSize).to.equal(font[item.size]);
          expect(styles.fontWeight).to.equal(weight[item.size]);
        });
        });
      });
    });
  });
//4. line-height
  xit('Checks the line-height of avatar-monogram', () => {
    allCombinations.forEach((item) => {
      avatarTestData.allLineHeight.forEach((lineHeigt) => {
        const avatarSelector = `#${item.variant}-${item.size}-avatar-monogram`;
        cy.get(avatarSelector).should('be.visible').should(($el) => {
          const styles = window.getComputedStyle($el[0]);
          expect(styles.lineHeight).to.equal(lineHeigt[item.size]);
        });
      });
    });
  });
  //5. enabled color
  xit('Checks the color of avatar-monogram', () => {
    allCombinations.forEach((item) => {
      avatarTestData.enabledBgColors.forEach((bgColor) => {
        avatarTestData.enabledColors.forEach((color) => {
          const avatarSelector = `#${item.variant}-${item.size}-avatar-monogram`;
            cy.get(avatarSelector).should('be.visible').should(($el) => {
              const styles = window.getComputedStyle($el[0]);
              expect(styles.backgroundColor).to.equal(bgColor[item.variant]);
              expect(styles.color).to.equal(color[item.variant]);
            });
        });
      });
    });
  });
  xit('Checks the color of avatar-user', () => {
    allCombinations.forEach((item) => {
      avatarTestData.enabledBgColors.forEach((bgColor) => {
        avatarTestData.enabledColors.forEach((color) => {
            const avatarSelector = `#${item.variant}-${item.size}-avatar-user`;
              cy.get(avatarSelector).should('be.visible').should(($el) => {
                const styles = window.getComputedStyle($el[0]);
                expect(styles.backgroundColor).to.equal(bgColor[item.variant]);
                expect(styles.color).to.equal(color[item.variant]);
              });
        });
      });
    });
  });
  xit('Checks the image of avatar-with-image', () => {
    allCombinations.forEach((item) => {
      const avatarSelector = `#${item.size}-avatar-with-image`;
        cy.get(avatarSelector)
        .find('div > img') 
        .should('be.visible') 
        .then(imgElement => {
          cy.wrap(imgElement).should('have.attr', 'src', avatarTestData.image)
        });
      });
    });
  
  //6. Focused state1 javítás wip
  it('Checks focused state of avatar-monogram', () => {
    allCombinations.forEach((item) => {
      const avatarSelector = `#${item.variant}-${item.size}-avatar-monogram`;
      if (item.variant === 'light') {
        cy.get(avatarSelector).click().should('have.focus').should('be.visible')
          .should('have.css', 'outline').and('eq', avatarTestData.white2); //most fekete, így bukik
      } else {
        cy.get(avatarSelector).click().should('have.focus').should('be.visible')
          .should('have.css', 'outline').and('eq', avatarTestData.black);
      }
    });
  });
  xit('Checks focused state of avatar-user', () => {
    allCombinations.forEach((item) => {
      const avatarSelector = `#${item.variant}-${item.size}-avatar-user`;
      if (item.variant === 'light') {
        cy.get(avatarSelector).click().should('have.focus').should('be.visible')
          .should('have.css', 'outline').and('eq', avatarTestData.white2); //most fekete, így bukik
      } else {
        cy.get(avatarSelector).click().should('have.focus').should('be.visible')
          .should('have.css', 'outline').and('eq', avatarTestData.black);
      }
    });
  });
  xit('Checks focused state of avatar-with-image', () => {
    allCombinations.forEach((item) => {
      const avatarSelector = `#${item.size}-avatar-with-image`;
        cy.get(avatarSelector).click().should('have.focus').should('be.visible')
          .should('have.css', 'outline').and('eq', avatarTestData.black);
          cy.get(avatarSelector).find('div > img').should('be.visible').then(imgElement => {
            cy.wrap(imgElement).should('have.attr', 'src', avatarTestData.image)
          });
      });
  });
  //6. Focused color
  xit('Checks color of avatar-monogram with FOCUSED state', () => {
    allCombinations.forEach((item) => {
      avatarTestData.focusedBgColors.forEach((bgColor) => {
        avatarTestData.enabledColors.forEach((color) => {
          const button = cy.get(`#${item.variant}-${item.size}-avatar-monogram`);
            button.realClick({ pointer: "mouse" }).should(($el) => {
              const styles = window.getComputedStyle($el[0]);
                expect(styles.backgroundColor).to.equal(bgColor[item.variant]);
                expect(styles.color).to.equal(color[item.variant]);
            });
          })
        });
      });
    });
  xit('Checks color of avatar-user with FOCUSED state', () => {
    allCombinations.forEach((item) => {
      avatarTestData.focusedBgColors.forEach((bgColor) => {
        avatarTestData.enabledColors.forEach((color) => {
          const button = cy.get(`#${item.variant}-${item.size}-avatar-user`);
            button.realClick({ pointer: "mouse" }).should(($el) => {
              const styles = window.getComputedStyle($el[0]);
                expect(styles.backgroundColor).to.equal(bgColor[item.variant]);
                expect(styles.color).to.equal(color[item.variant]);
            });
          })
        });
      });
    });
  //Focus image 1.0
  xit('Checks color of avatar-with-image with FOCUSED state', () => {
    allCombinations.forEach((item) => {
      const avatarSelector = cy.get(`#${item.size}-avatar-with-image`);
        avatarSelector.realClick({ pointer: "mouse" }).find('div > img').should('be.visible').then(imgElement => {
          cy.wrap(imgElement).should('have.attr', 'src', avatarTestData.image)
        });
    });
  });
//Focus image 2.0
  xit('Checks color of avatar-with-image with FOCUSED state', () => {
    allCombinations.forEach((item) => {
          const avatarSelector = `#${item.size}-avatar-with-image`;
            cy.get(avatarSelector).realClick({ pointer: "mouse" }).should('have.focus').should('be.visible')
            .should('have.css', 'outline').and('eq', avatarTestData.black);
            cy.get(avatarSelector).find('div > img').should('be.visible').then(imgElement => {
              cy.wrap(imgElement).should('have.attr', 'src', avatarTestData.image)
            });

      });
    });

  //7. hovered
  xit('Checks color and background color of avatar-monogram with hovered state', () => {
    allCombinations.forEach((item) => {
      avatarTestData.hoveredBgColors.forEach((bgColor) => {
        avatarTestData.hoveredColors.forEach((color) => {
          const button = cy.get(`#${item.variant}-${item.size}-avatar-monogram`);
            button.realHover({ pointer: "mouse" }).should(($el) => {
              const styles = window.getComputedStyle($el[0]);
              expect(styles.backgroundColor).to.equal(bgColor[item.variant]);
              expect(styles.color).to.equal(color[item.variant]);
            });
        });
      });
    });
  }); 
  xit('Checks color and background color of avatar-user with hovered state', () => {
    allCombinations.forEach((item) => {
      avatarTestData.hoveredBgColors.forEach((bgColor) => {
        avatarTestData.hoveredColors.forEach((color) => {
          const button = cy.get(`#${item.variant}-${item.size}-avatar-user`);
            button.realHover({ pointer: "mouse" }).should(($el) => {
              const styles = window.getComputedStyle($el[0]);
              expect(styles.backgroundColor).to.equal(bgColor[item.variant]);
              expect(styles.color).to.equal(color[item.variant]);
            });
        });
      });
    });
  }); 
  xit('Checks color and background color of avatar-with-image with hovered state', () => {
    allCombinations.forEach((item) => {
      const avatarSelector = `#${item.size}-avatar-with-image`;
        cy.get(avatarSelector).then(button => {
          cy.wrap(button).realHover({ pointer: "mouse" }).should('be.visible')
          cy.get(avatarSelector).find('div > img').should('be.visible').then(imgElement => {
            cy.wrap(imgElement).should('have.attr', 'src', avatarTestData.image)
          });
        });
    });
  }); 

  //8. pressed
  xit('Checks color of avatar-monogram with active (pressed) state', () => {
    allCombinations.forEach((item) => {
      avatarTestData.activeBgColors.forEach((bgColor) => {
        avatarTestData.enabledColors.forEach((color) => {
          const avatarSelector = `#${item.variant}-${item.size}-avatar-monogram`;
            cy.get(avatarSelector).then(button => {
            cy.wrap(button).realMouseDown({ pointer: "mouse" }).should(($el) => {
              const styles = window.getComputedStyle($el[0]);
                expect(styles.backgroundColor).to.equal(bgColor[item.variant]);
                expect(styles.color).to.equal(color[item.variant]);
            });
            }).realMouseUp({ pointer: "mouse" });
        });
      });
    });
  });
  xit('Checks color of avatar-user with active (pressed) state', () => {
    allCombinations.forEach((item) => {
      avatarTestData.activeBgColors.forEach((bgColor) => {
        avatarTestData.enabledColors.forEach((color) => {
          const avatarSelector = `#${item.variant}-${item.size}-avatar-user`;
            cy.get(avatarSelector).then(button => {
            cy.wrap(button).realMouseDown({ pointer: "mouse" }).should(($el) => {
              const styles = window.getComputedStyle($el[0]);
                expect(styles.backgroundColor).to.equal(bgColor[item.variant]);
                expect(styles.color).to.equal(color[item.variant]);
            });
            }).realMouseUp({ pointer: "mouse" });
        });
      });
    });
  });
  xit('Checks image of avatar-with-image with active (pressed) state', () => {
    allCombinations.forEach((item) => {
          const avatarSelector = `#${item.size}-avatar-with-image`;
            cy.get(avatarSelector).then(button => {
            cy.wrap(button).realMouseDown({ pointer: "mouse" })
            cy.get(avatarSelector).find('div > img').should('be.visible').then(imgElement => {
              cy.wrap(imgElement).should('have.attr', 'src', avatarTestData.image)
            });
            }).realMouseUp({ pointer: "mouse" });
    });
  });
  //9.radius
  xit('Checks left and right border radius of avatar-monogram', () => {
    allCombinations.forEach((item) => {
      const avatarSelector = `#${item.variant}-${item.size}-avatar-monogram`;
      cy.get(avatarSelector).should('be.visible').then(($el) => {
        const styles = window.getComputedStyle($el[0]);
        expect(styles.borderTopLeftRadius).to.equal(avatarTestData.allRadius);
        expect(styles.borderTopRightRadius).to.equal(avatarTestData.allRadius);
        expect(styles.borderBottomLeftRadius).to.equal(avatarTestData.allRadius);
        expect(styles.borderBottomRightRadius).to.equal(avatarTestData.allRadius);
      });
    });
  });
  xit('Checks left and right border radius of avatar-user', () => {
    allCombinations.forEach((item) => {
      const avatarSelector = `#${item.variant}-${item.size}-avatar-user`;
      cy.get(avatarSelector).should('be.visible').then(($el) => {
        const styles = window.getComputedStyle($el[0]);
        expect(styles.borderTopLeftRadius).to.equal(avatarTestData.allRadius);
        expect(styles.borderTopRightRadius).to.equal(avatarTestData.allRadius);
        expect(styles.borderBottomLeftRadius).to.equal(avatarTestData.allRadius);
        expect(styles.borderBottomRightRadius).to.equal(avatarTestData.allRadius);
      });
    });
  });
  xit('Checks left and right border radius of avatar-with-image', () => {
    allCombinations.forEach((item) => {
      const avatarSelector = `#${item.size}-avatar-with-image`;
      cy.get(avatarSelector).should('be.visible').then(($el) => {
        const styles = window.getComputedStyle($el[0]);
        expect(styles.borderTopLeftRadius).to.equal(avatarTestData.allRadius);
        expect(styles.borderTopRightRadius).to.equal(avatarTestData.allRadius);
        expect(styles.borderBottomLeftRadius).to.equal(avatarTestData.allRadius);
        expect(styles.borderBottomRightRadius).to.equal(avatarTestData.allRadius);
      });
    });
  });
  //10. padding 
  xit('Checks all padding of avatar-monogram', () => {
    allCombinations.forEach((item) => {
      avatarTestData.paddingTop.forEach((topPadding) => {
        avatarTestData.paddingRight.forEach((rightPadding) => {
          avatarTestData.paddingLeft.forEach((leftPadding) => {
            avatarTestData.paddingBottom.forEach((bottomPadding) => {
      const avatarSelector = `#${item.variant}-${item.size}-avatar-monogram`;
      cy.get(avatarSelector).should('be.visible').then(($el) => {
        const styles = window.getComputedStyle($el[0]);
        expect(styles.paddingTop).to.equal(topPadding[item.size]);
        expect(styles.paddingRight).to.equal(rightPadding[item.size]);
        expect(styles.paddingLeft).to.equal(leftPadding[item.size]);
        expect(styles.paddingBottom).to.equal(bottomPadding[item.size]);
            });
          });
        });
      });
    });
  });
});
xit('Checks all padding of avatar-user', () => {
  allCombinations.forEach((item) => {
    avatarTestData.paddingTop.forEach((topPadding) => {
      avatarTestData.paddingRight.forEach((rightPadding) => {
        avatarTestData.paddingLeft.forEach((leftPadding) => {
          avatarTestData.paddingBottom.forEach((bottomPadding) => {
    const avatarSelector = `#${item.variant}-${item.size}-avatar-user`;
    cy.get(avatarSelector).should('be.visible').then(($el) => {
      const styles = window.getComputedStyle($el[0]);
      expect(styles.paddingTop).to.equal(topPadding[item.size]);
      expect(styles.paddingRight).to.equal(rightPadding[item.size]);
      expect(styles.paddingLeft).to.equal(leftPadding[item.size]);
      expect(styles.paddingBottom).to.equal(bottomPadding[item.size]);
            });
          });
        });
      });
    });
  });
});
xit('Checks all padding of avatar-with-image', () => {
  allCombinations.forEach((item) => {
    avatarTestData.paddingTop.forEach((topPadding) => {
      avatarTestData.paddingRight.forEach((rightPadding) => {
        avatarTestData.paddingLeft.forEach((leftPadding) => {
          avatarTestData.paddingBottom.forEach((bottomPadding) => {
    const avatarSelector = `#${item.size}-avatar-with-image`;
    cy.get(avatarSelector).should('be.visible').then(($el) => {
      const styles = window.getComputedStyle($el[0]);
      expect(styles.paddingTop).to.equal(topPadding[item.size]);
      expect(styles.paddingRight).to.equal(rightPadding[item.size]);
      expect(styles.paddingLeft).to.equal(leftPadding[item.size]);
      expect(styles.paddingBottom).to.equal(bottomPadding[item.size]);
            });
          });
        });
      });
    });
  });
});


});