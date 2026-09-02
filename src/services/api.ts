import {
  mockDashboardStats,
  mockMapZones,
  mockSensors,
  mockAlerts,
  mockFloodMetrics,
  mockLandslideMetrics,
  mockAIPredictions,
  mockSafeRoutes,
} from '../data/mockData';
import type {
  DashboardStats,
  MapZone,
  SensorData,
  EmergencyAlert,
  FloodMetrics,
  LandslideMetrics,
  AIPredictionResult,
  SafeRouteInfo,
} from '../types';

/**
 * Service API layer for DisasterShield AI.
 * Currently backed by realistic mock data, structured for seamless replacement by real REST / WebSocket backend.
 */
export class DisasterShieldAPI {
  static async getDashboardStats(): Promise<DashboardStats> {
    // Simulate network latency
    await new Promise((res) => setTimeout(res, 200));
    return { ...mockDashboardStats };
  }

  static async getMapZones(): Promise<MapZone[]> {
    await new Promise((res) => setTimeout(res, 200));
    return [...mockMapZones];
  }

  static async getSensors(): Promise<SensorData[]> {
    await new Promise((res) => setTimeout(res, 200));
    return [...mockSensors];
  }

  static async getAlerts(): Promise<EmergencyAlert[]> {
    await new Promise((res) => setTimeout(res, 200));
    return [...mockAlerts];
  }

  static async getFloodMetrics(): Promise<FloodMetrics> {
    await new Promise((res) => setTimeout(res, 200));
    return { ...mockFloodMetrics };
  }

  static async getLandslideMetrics(): Promise<LandslideMetrics> {
    await new Promise((res) => setTimeout(res, 200));
    return { ...mockLandslideMetrics };
  }

  static async getAIPredictions(): Promise<AIPredictionResult[]> {
    await new Promise((res) => setTimeout(res, 200));
    return [...mockAIPredictions];
  }

  static async getSafeRoutes(): Promise<SafeRouteInfo[]> {
    await new Promise((res) => setTimeout(res, 200));
    return [...mockSafeRoutes];
  }
}
