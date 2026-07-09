import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const steps = ["Shipping", "Payment", "Review"];

const CheckoutStepper = ({ currentStep = 1 }) => {
  return (
    <View style={styles.container}>
      {steps.map((step, index) => {
        const stepNumber = index + 1;

        const completed = stepNumber < currentStep;
        const active = stepNumber === currentStep;

        return (
          <React.Fragment key={step}>
            <View style={styles.stepWrapper}>
              <View
                style={[
                  styles.circle,
                  completed && styles.completedCircle,
                  active && styles.activeCircle,
                ]}
              >
                {completed ? (
                  <Ionicons name="checkmark" size={14} color="#fff" />
                ) : (
                  <Text
                    style={[
                      styles.number,
                      active && styles.activeNumber,
                    ]}
                  >
                    {stepNumber}
                  </Text>
                )}
              </View>

              <Text
                style={[
                  styles.label,
                  (completed || active) && styles.activeLabel,
                ]}
              >
                {step}
              </Text>
            </View>

            {index !== steps.length - 1 && (
              <View
                style={[
                  styles.line,
                  completed && styles.completedLine,
                ]}
              />
            )}
          </React.Fragment>
        );
      })}
    </View>
  );
};

export default CheckoutStepper;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginHorizontal: 20,
    marginTop: 10,
    marginBottom: 25,
  },

  stepWrapper: {
    alignItems: "center",
    width: 70,
  },

  circle: {
    width: 28,
    height: 28,
    borderRadius: 14,
    backgroundColor: "#E5E7EB",
    justifyContent: "center",
    alignItems: "center",
  },

  activeCircle: {
    backgroundColor: "#1F2937",
  },

  completedCircle: {
    backgroundColor: "#22C55E",
  },

  number: {
    color: "#6B7280",
    fontSize: 13,
    fontWeight: "700",
  },

  activeNumber: {
    color: "#fff",
  },

  label: {
    marginTop: 6,
    fontSize: 12,
    color: "#9CA3AF",
    fontWeight: "500",
  },

  activeLabel: {
    color: "#111827",
    fontWeight: "600",
  },

  line: {
    flex: 1,
    height: 2,
    backgroundColor: "#E5E7EB",
    marginHorizontal: 6,
    marginBottom: 20,
  },

  completedLine: {
    backgroundColor: "#22C55E",
  },
});